import { useEffect, useRef } from "react";

export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current?.closest("section");
    if (!section || !iframeRef.current) return;

    const postMessage = (action: string) => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: action, args: "" }),
        "*"
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          postMessage("playVideo");
        } else {
          postMessage("pauseVideo");
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative aspect-video bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
      <iframe
        ref={iframeRef}
        className="absolute inset-0 size-full"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
        title="Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
