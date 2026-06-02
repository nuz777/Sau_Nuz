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
    title: "Ir a supertools",
    img: "/img/supertools/supertools.png",
    desc: "Recursos, guías y tutoriales para iniciarte o mejorar tus habilidades de desarrollo web.",
    badge: "Web Design",
    num: "01",
    route: "https://supertools-k.vercel.app/games",
  },
  {
    title: "Herramientas Windows",
    img: "/img/SN-tools.jpg",
    desc: "Software esencial, utilidades y apps optimizadas para sacar el máximo partido a tu PC.",
    badge: "Tools",
    num: "02",
    route: "/tools/windows",
  },
];
