export interface InfoMessage {
  id: string;
  title: string;
  message: string;
  footnote?: string;
  warning?: string;
  buttonText: string;
  image: string;
  imageAlt: string;
  position: "top-right" | "bottom-right";
  localStorageKey: string;
  trigger: "auto" | "scroll";
  delayMs?: number;
  sectionId?: string;
  audio?: string;
}

export const messages: Record<string, InfoMessage> = {
  "intro-home": {
    id: "intro-home",
    title: "SN-Tools",
    message: "¡Bienvenido! Aquí puedes descargar tools & games gratis. Recuerda leer el manual =]",
    warning: "⚠️ Proyecto en fase alpha, es normal ver errores.",
    buttonText: "Entendido",
    image: "/img/Nuz.png",
    imageAlt: "Welcome",
    position: "top-right",
    localStorageKey: "introVisto",
    trigger: "auto",
    delayMs: 500,
    audio: "/audio/noti.mp3",
  },
  "info-games": {
    id: "info-games",
    title: "¡Hola! Finder",
    message: "Puedes explorar herramientas de programación, utilidades de Windows y más. Todos los juegos han sido probados por Nuz, garantizando su seguridad.",
    footnote: "¿Problemas o sugerencias? No dudes en contactarnos.",
    warning: "¡OJO! Visita regularmente para ver nuevos contenidos.",
    buttonText: "Gracias Nuz",
    image: "/img/Nuz.png",
    imageAlt: "Info",
    position: "bottom-right",
    localStorageKey: "infoVisto",
    trigger: "auto",
    delayMs: 2500,
  },
  about: {
    id: "about",
    title: "Sobre SauNuz",
    message: "Ofrecemos herramientas, desarrollo web, optimización y una comunidad para ayudarte a aprender y mejorar tus habilidades en informática.",
    footnote: "Todo nuestro software es probado antes de compartirlo.",
    warning: "💡 ¡Explora nuestras secciones para descubrir más!",
    buttonText: "Entendido",
    image: "/img/Nuz.png",
    imageAlt: "About",
    position: "bottom-right",
    localStorageKey: "aboutVisto",
    trigger: "scroll",
    sectionId: "about",
  },
  team: {
    id: "team",
    title: "Nuestro Equipo",
    message: "Conoce a las personas detrás de SauNuz. Finder, Nuz y Themper trabajan para traerte el mejor contenido.",
    footnote: "Haz clic en cada tarjeta para saber más sobre ellos.",
    warning: "🤝 ¡Somos una comunidad en crecimiento!",
    buttonText: "Genial",
    image: "/img/Nuz.png",
    imageAlt: "Team",
    position: "bottom-right",
    localStorageKey: "teamVisto",
    trigger: "scroll",
    sectionId: "team",
  },
  video: {
    id: "video",
    title: "Video Demostrativo",
    message: "Mira nuestro video introductorio para conocer cómo usar el sitio y todo lo que ofrecemos.",
    footnote: "Créditos a Themper09 por la producción.",
    warning: "🎬 ¡No olvides activar el sonido!",
    buttonText: "Visto",
    image: "/img/Nuz.png",
    imageAlt: "Video",
    position: "bottom-right",
    localStorageKey: "videoVisto",
    trigger: "scroll",
    sectionId: "video",
  },
};
