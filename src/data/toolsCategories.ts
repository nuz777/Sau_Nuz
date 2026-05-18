export interface ToolCategory {
  title: string;
  img: string;
  desc: string;
  badge: string;
  num: string;
  route: string;
}

export const toolCategories: ToolCategory[] = [
  {
    title: "Aprender a programar",
    img: "/img/programacion.jpg",
    desc: "Recursos, guías y tutoriales para iniciarte o mejorar tus habilidades de desarrollo web.",
    badge: "Web Design",
    num: "01",
    route: "/tools/programming",
  },
  {
    title: "Herramientas Windows",
    img: "/img/SN-tools.jpg",
    desc: "Software esencial, utilidades y apps optimizadas para sacar el máximo partido a tu PC.",
    badge: "Tools",
    num: "02",
    route: "/tools/windows",
  },
  {
    title: "Juegos PC",
    img: "/img/gamesperfect.jpg",
    desc: "Selección curada de títulos para gama media y alta. Los mejores lanzamientos y clásicos.",
    badge: "Gaming",
    num: "03",
    route: "/tools/games",
  },
  {
    title: "Juegos Android",
    img: "/img/juegoslivianos.jpg",
    desc: "APKs verificados para dispositivos Android. Sin publicidad invasiva, directo al juego.",
    badge: "Android APK",
    num: "04",
    route: "/tools/games",
  },
];
