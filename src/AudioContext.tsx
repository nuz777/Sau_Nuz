import { createContext, useContext, useState, useRef, useEffect, useCallback, type ReactNode } from "react";

interface AudioCtxType {
  isPlaying: boolean;
  toggleAudio: () => void;
  intensity: number;
}

const AudioCtx = createContext<AudioCtxType>({
  isPlaying: false,
  toggleAudio: () => {},
  intensity: 0,
});

const WebAudioCtx = window.AudioContext;

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [intensity, setIntensity] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const rafRef = useRef<number>(0);

  const setupAudio = useCallback(() => {
    if (audioCtxRef.current || !audioRef.current) return;

    const ctx = new WebAudioCtx();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    const source = ctx.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(ctx.destination);

    audioCtxRef.current = ctx;
    analyserRef.current = analyser;
    sourceRef.current = source;
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      setIntensity(0);
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const analyser = analyserRef.current;
    if (!analyser) return;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    function update() {
      analyser!.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
      setIntensity(Math.min(1, avg / 128));
      rafRef.current = requestAnimationFrame(update);
    }
    update();

    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      audioCtxRef.current?.close();
    };
  }, []);

  const toggleAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      if (!audioCtxRef.current) setupAudio();
      if (audioCtxRef.current?.state === "suspended") {
        audioCtxRef.current.resume();
      }
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, [setupAudio]);

  return (
    <AudioCtx.Provider value={{ isPlaying, toggleAudio, intensity }}>
      {children}
      <audio ref={audioRef} src="/audio/whatsapp-audio.m4a" loop preload="auto" />
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  return useContext(AudioCtx);
}
