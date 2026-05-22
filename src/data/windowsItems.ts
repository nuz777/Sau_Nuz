export interface WindowsItem {
  id: string;
  title: string;
  img: string;
  size: string;
  desc: string;
  link: string;
  password?: string;
  minReq: string;
  recReq: string;
}

export const windowsItems: WindowsItem[] = [
  {
    id: "w1",
    title: "Windows 10 Home",
    img: "/img/win10.jpg",
    size: "5.93 GB",
    desc: "Sistema operativo estable y ligero ideal para uso doméstico. Compatible con la mayoría de programas y hardware.",
    link: "https://www.mediafire.com/file/72xxzui5jpm2xpm/W10.22H2.19045.6216.ZDescargas.org.rar/file",
    minReq: "CPU: 1 GHz<br/>RAM: 1 GB (32-bit) / 2 GB (64-bit)<br/>Disco: 16 GB<br/>GPU: DirectX 9<br/>Pantalla: 800×600",
    recReq: "CPU: i3 2.0 GHz<br/>RAM: 4 GB<br/>Disco: 64 GB SSD<br/>GPU: DirectX 11<br/>Pantalla: 1080p",
  },
  {
    id: "w2",
    title: "Windows 11 Pro",
    img: "/img/windows11.jpg",
    size: "7.8 GB",
    desc: "Versión avanzada con funciones profesionales, seguridad mejorada y optimización para trabajo y gaming.",
    link: "https://www.microsoft.com/es-es/software-download/windows11",
    minReq: "CPU: 1 GHz 64-bit 2 núcleos<br/>RAM: 4 GB<br/>Disco: 64 GB<br/>GPU: DirectX 12<br/>TPM: v2.0",
    recReq: "CPU: i5 / Ryzen 5<br/>RAM: 8 GB<br/>Disco: 256 GB SSD<br/>GPU: DirectX 12<br/>Pantalla: 1080p",
  },
  {
    id: "w3",
    title: "Reseteador de Contraseña Windows",
    img: "/img/Windows Login.jpg",
    size: "266 MB",
    desc: "Herramienta para eliminar o cambiar contraseñas de Windows mediante arranque desde USB.",
    link: "https://www.mediafire.com/file/277z6guz4zkeyvt/RESETEADOR+DE+CONTRASE%C3%91AS+DE+WINDOWS.rar/file",
    minReq: "USB: 1 GB<br/>BIOS: Soporte arranque USB<br/>OS: Win 7/8/10/11<br/>RAM: 512 MB<br/>CPU: x86/x64",
    recReq: "USB: 4 GB (USB 3.0)<br/>BIOS: UEFI<br/>OS: Win 10/11<br/>RAM: 1 GB<br/>CPU: Dual Core",
  },
  {
    id: "w4",
    title: "Rufus",
    img: "/img/rufus.jpg",
    size: "1 MB",
    desc: "Programa ligero para crear USB booteables de forma rápida y sencilla.",
    link: "https://github.com/pbatard/rufus/releases/download/v4.13/rufus-4.13.exe",
    minReq: "OS: Win 7 o superior<br/>RAM: 512 MB<br/>USB: 4 GB<br/>CPU: x86/x64<br/>Puerto: USB 2.0",
    recReq: "OS: Win 10/11<br/>RAM: 1 GB<br/>USB: 8 GB<br/>CPU: Dual Core<br/>Puerto: USB 3.0",
  },
  {
    id: "w5",
    title: "Ventoy",
    img: "/img/ventoy.jpg",
    size: "11 MB",
    desc: "Permite copiar múltiples ISOs a un USB y arrancarlas sin formatear cada vez.",
    link: "https://github.com/ventoy/Ventoy/releases/download/v1.0.99/ventoy-1.0.99-windows.zip",
    minReq: "OS: Win 7 o superior<br/>RAM: 512 MB<br/>USB: 8 GB<br/>CPU: x86/x64<br/>Puerto: USB 2.0",
    recReq: "OS: Win 10/11<br/>RAM: 1 GB<br/>USB: 32 GB<br/>CPU: Dual Core<br/>Puerto: USB 3.0",
  },
  {
    id: "w6",
    title: "Office 2016 Pro Plus",
    img: "/img/office2016.jpg",
    size: "695 MB",
    desc: "Suite de ofimática con Word, Excel, PowerPoint y más. Ideal para equipos de bajos recursos.",
    link: "https://drive.google.com/file/d/131DfLaxH9s904ZhmUzmvCyg_75fIKN2V/view",
    minReq: "OS: Win 7 SP1<br/>CPU: 1 GHz x86/x64<br/>RAM: 1 GB (32-bit) / 2 GB (64-bit)<br/>Disco: 3 GB<br/>DirectX: v10",
    recReq: "OS: Win 10<br/>CPU: i3 2.0 GHz<br/>RAM: 4 GB<br/>Disco: 8 GB SSD<br/>DirectX: v11",
  },
  {
    id: "w7",
    title: "Comandos Activar Office",
    img: "/img/comandoactivar.webp",
    size: "295 KB",
    desc: "Archivo con comandos CMD para activar Office y Windows fácilmente mediante scripts.",
    link: "https://mega.nz/file/tnBywBhK#f0NUpTyRd9Hb7PzGy8tY_qWeC_Wro8mRIHgXjNB4Xf4",
    minReq: "OS: Win 7 o superior<br/>RAM: 512 MB<br/>Disco: 1 MB<br/>Office: 2013 o superior<br/>CMD: Acceso admin",
    recReq: "OS: Win 10/11<br/>RAM: 1 GB<br/>Disco: 1 MB<br/>Office: 2016 o superior<br/>CMD: Acceso admin",
  },
  {
    id: "w8",
    title: "Windows 11 Lite",
    img: "/img/Wi11litepng.jpg",
    size: "4.3 GB",
    desc: "Versión optimizada y ligera, ideal para PCs de bajos recursos con mejor rendimiento.",
    link: "https://taiwebs.com/windows/download-windows-11-lite-6621.html",
    password: "taiwebs.com",
    minReq: "CPU: 1 GHz 64-bit<br/>RAM: 2 GB<br/>Disco: 32 GB<br/>GPU: DirectX 12<br/>TPM: No requerido",
    recReq: "CPU: Dual Core 2.0 GHz<br/>RAM: 4 GB<br/>Disco: 64 GB SSD<br/>GPU: DirectX 12<br/>Pantalla: 1080p",
  },
  {
    id: "w9",
    title: "Microsoft Office 2024",
    img: "/img/Office2024.jpg",
    size: "6.3 GB",
    desc: "Última versión con mejoras en rendimiento, diseño moderno y nuevas funciones.",
    link: "https://www.mediafire.com/file/fs49nkesrk6r8s7/OFF24v2408B17932.20670.ZDescargas.org.rar/file",
    password: "www.zdescargas.org",
    minReq: "OS: Win 10 64-bit<br/>CPU: 1.6 GHz Dual Core<br/>RAM: 4 GB<br/>Disco: 4 GB<br/>DirectX: v10",
    recReq: "OS: Win 11 64-bit<br/>CPU: i5 2.0 GHz<br/>RAM: 8 GB<br/>Disco: 10 GB SSD<br/>DirectX: v11",
  },
];