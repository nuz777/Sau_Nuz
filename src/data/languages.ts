export interface Language {
  id: string;
  title: string;
  img: string;
  tag: string;
  desc: string;
}

export const languages: Language[] = [
  {
    id: "m1",
    title: "JavaScript",
    img: "/img/js.png",
    tag: "Lenguaje web",
    desc: "Lenguaje de programación esencial para el desarrollo web. Permite crear interactividad en páginas, manejar eventos, animaciones y trabajar tanto en el frontend como en el backend con Node.js.",
  },
  {
    id: "m2",
    title: "Python",
    img: "/img/python.png",
    tag: "Fácil y potente",
    desc: "Lenguaje fácil de aprender y muy versátil. Se usa en desarrollo web, inteligencia artificial, análisis de datos, automatización y más.",
  },
  {
    id: "m3",
    title: "Java",
    img: "/img/226777.png",
    tag: "Multiplataforma",
    desc: "Lenguaje robusto y multiplataforma. Muy usado en aplicaciones empresariales, desarrollo Android y sistemas grandes.",
  },
  {
    id: "m4",
    title: "C++",
    img: "/img/C-2.png",
    tag: "Alto rendimiento",
    desc: "Lenguaje de alto rendimiento utilizado en videojuegos, sistemas operativos y software que requiere velocidad y control de memoria.",
  },
  {
    id: "m5",
    title: "HTML",
    img: "/img/html.png",
    tag: "Estructura web",
    desc: "Lenguaje de marcado que define la estructura de las páginas web. Es la base de cualquier sitio web.",
  },
  {
    id: "m6",
    title: "CSS",
    img: "/img/css3.jpg",
    tag: "Diseño web",
    desc: "Lenguaje de estilos que permite diseñar y dar apariencia a páginas web. Controla colores, layouts, animaciones y diseño responsive.",
  },
];
