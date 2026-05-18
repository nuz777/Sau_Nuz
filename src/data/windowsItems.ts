export interface WindowsItem {
  id: string;
  title: string;
  img: string;
  size: string;
  desc: string;
  link: string;
  password?: string;
}

export const windowsItems: WindowsItem[] = [
  {
    id: "w1",
    title: "Windows 10 Home",
    img: "/img/win10.jpg",
    size: "5.93 GB",
    desc: "Sistema operativo estable y ligero ideal para uso doméstico. Compatible con la mayoría de programas y hardware.",
    link: "https://www.mediafire.com/file/72xxzui5jpm2xpm/W10.22H2.19045.6216.ZDescargas.org.rar/file",
  },
  {
    id: "w2",
    title: "Windows 11 Pro",
    img: "/img/windows11.jpg",
    size: "7.8 GB",
    desc: "Versión avanzada con funciones profesionales, seguridad mejorada y optimización para trabajo y gaming. Descarga oficial desde Microsoft.",
    link: "https://www.microsoft.com/es-es/software-download/windows11",
  },
  {
    id: "w3",
    title: "Reseteador de Contraseña windows",
    img: "/img/Windows Login.jpg",
    size: "266 MB",
    desc: "Herramienta para eliminar o cambiar contraseñas de Windows mediante arranque desde USB.",
    link: "https://www.mediafire.com/file/277z6guz4zkeyvt/RESETEADOR+DE+CONTRASE%C3%91AS+DE+WINDOWS.rar/file",
  },
  {
    id: "w4",
    title: "Rufus",
    img: "/img/rufus.jpg",
    size: "1 MB",
    desc: "Programa ligero para crear USB booteables de forma rápida y sencilla.",
    link: "https://github.com/pbatard/rufus/releases/download/v4.13/rufus-4.13.exe",
  },
  {
    id: "w5",
    title: "Ventoy",
    img: "/img/ventoy.jpg",
    size: "11 MB",
    desc: "Permite copiar múltiples ISOs a un USB y arrancarlas sin formatear cada vez.",
    link: "https://github.com/ventoy/Ventoy/releases/download/v1.0.99/ventoy-1.0.99-windows.zip",
  },
  {
    id: "w6",
    title: "Office 2016 Pro Plus",
    img: "/img/office2016.jpg",
    size: "695 MB",
    desc: "Suite de ofimática con Word, Excel, PowerPoint y más. Ideal para equipos de bajos recursos.",
    link: "https://drive.google.com/file/d/131DfLaxH9s904ZhmUzmvCyg_75fIKN2V/view",
  },
  {
    id: "w7",
    title: "Comandos Activar Office",
    img: "/img/comandoactivar.webp",
    size: "295 KB",
    desc: "Archivo con comandos CMD para activar Office y Windows fácilmente mediante scripts.",
    link: "https://mega.nz/file/tnBywBhK#f0NUpTyRd9Hb7PzGy8tY_qWeC_Wro8mRIHgXjNB4Xf4",
  },
  {
    id: "w8",
    title: "Windows 11 Lite",
    img: "/img/Wi11litepng.jpg",
    size: "4.3 GB",
    desc: "Versión optimizada y ligera, ideal para PCs de bajos recursos con mejor rendimiento.",
    link: "https://taiwebs.com/windows/download-windows-11-lite-6621.html",
    password: "taiwebs.com",
  },
  {
    id: "w9",
    title: "Microsoft Office 2024",
    img: "/img/Office2024.jpg",
    size: "6.3 GB",
    desc: "Última versión con mejoras en rendimiento, diseño moderno y nuevas funciones.",
    link: "https://www.mediafire.com/file/fs49nkesrk6r8s7/OFF24v2408B17932.20670.ZDescargas.org.rar/file",
    password: "www.zdescargas.org",
  },
];
