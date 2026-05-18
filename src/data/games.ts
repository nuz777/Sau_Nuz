export interface Game {
  id: string;
  title: string;
  img: string;
  size: string;
  desc: string;
  minReq: string;
  recReq: string;
  link: string;
}

export const games: Game[] = [
  {
    id: "g1",
    title: "Dirt Rally 4",
    img: "/img/dirt4.jpg",
    size: "35 GB",
    desc: "Simulador de carreras realista con rutas de rally, física avanzada y múltiples modos de juego.",
    minReq: "OS: Win 10<br/>CPU: i5-4590<br/>RAM: 8 GB<br/>GPU: GTX 970<br/>DirectX: v11",
    recReq: "OS: Win 10/11<br/>CPU: i7-6700K<br/>RAM: 16 GB<br/>GPU: RTX 2060<br/>DirectX: v11",
    link: "https://blizzpaste.com/Games/D1RT41.txt",
  },
  {
    id: "g2",
    title: "DNF Duel",
    img: "/img/dfn.jpg",
    size: "12 GB",
    desc: "Juego de lucha 2D con estilo anime y combates dinámicos.",
    minReq: "OS: Win 10<br/>CPU: i5-8600<br/>RAM: 8 GB<br/>GPU: GTX 1060<br/>DirectX: v11",
    recReq: "OS: Win 10/11<br/>CPU: i7-9700K<br/>RAM: 16 GB<br/>GPU: RTX 2070<br/>DirectX: v12",
    link: "https://blizzpaste.com/Games_2/DFNDUELNE1.txt",
  },
  {
    id: "g3",
    title: "God of War Ragnarok",
    img: "/img/GOTATWAR.jpg",
    size: "114 GB",
    desc: "Aventura épica basada en la mitología nórdica con Kratos y Atreus.",
    minReq: "OS: Win 10 64-bit<br/>CPU: i5-6600K<br/>RAM: 8 GB<br/>GPU: GTX 1060<br/>DirectX: v11",
    recReq:
      "OS: Win 11 64-bit<br/>CPU: Ryzen 7 3700X<br/>RAM: 16 GB<br/>GPU: RTX 3080<br/>DirectX: v12",
    link: "https://filekeeper.net/download",
  },
  {
    id: "g4",
    title: "Dragon Ball FighterZ",
    img: "/img/Dragon_Ball_FighterZ_portada.jpg",
    size: "9 GB",
    desc: "Juego de lucha 3v3 con gráficos estilo anime espectaculares.",
    minReq: "OS: Win 7/8/10<br/>CPU: i5-4460<br/>RAM: 4 GB<br/>GPU: GTX 660<br/>DirectX: v11",
    recReq: "OS: Win 10<br/>CPU: i7-3770<br/>RAM: 8 GB<br/>GPU: GTX 1060<br/>DirectX: v11",
    link: "#",
  },
  {
    id: "g5",
    title: "Call of Duty MW3",
    img: "/img/COD.jpg",
    size: "14 GB",
    desc: "Shooter intenso con campaña, multijugador y acción rápida.",
    minReq: "OS: Win 7 64-bit<br/>CPU: i5-2500K<br/>RAM: 6 GB<br/>GPU: GTX 560<br/>DirectX: v11",
    recReq: "OS: Win 10 64-bit<br/>CPU: i7-3770<br/>RAM: 8 GB<br/>GPU: GTX 970<br/>DirectX: v11",
    link: "https://blizzpaste.com/Games_3/CLLOFDMW3.txt",
  },
  {
    id: "g6",
    title: "Euro Truck Simulator 2",
    img: "/img/ets2.jpg",
    size: "15 GB",
    desc: "Simulador de camiones por toda Europa con gestión de empresa.",
    minReq:
      "OS: Win 7/8/10<br/>CPU: Dual Core 2.4 GHz<br/>RAM: 4 GB<br/>GPU: GeForce GTS 450<br/>DirectX: v9",
    recReq: "OS: Win 10/11<br/>CPU: i7-4770<br/>RAM: 8 GB<br/>GPU: GTX 1060<br/>DirectX: v11",
    link: "https://blizzpaste.com/Games/EUROTRS1.txt",
  },
  {
    id: "g7",
    title: "F1 2014",
    img: "/img/f1.jpg",
    size: "10 GB",
    desc: "Simulación oficial de Fórmula 1 con todos los equipos y circuitos.",
    minReq:
      "OS: Win 7/8<br/>CPU: Core 2 Quad Q8400<br/>RAM: 4 GB<br/>GPU: GTX 460<br/>DirectX: v11",
    recReq: "OS: Win 7/8/10<br/>CPU: i5-4670<br/>RAM: 8 GB<br/>GPU: GTX 760<br/>DirectX: v11",
    link: "https://www.reddit.com/r/abandonware/comments/1962vy4/f1_2013_to_f1_2020_download_links/?tl=es-419",
  },
  {
    id: "g8",
    title: "Metro Redux",
    img: "/img/Metro.jpg",
    size: "20 GB",
    desc: "Shooter postapocalíptico con historia profunda y supervivencia.",
    minReq:
      "OS: Win 7 64-bit<br/>CPU: Dual Core 2.2 GHz<br/>RAM: 2 GB<br/>GPU: GTX 480<br/>DirectX: v11",
    recReq:
      "OS: Win 10 64-bit<br/>CPU: Quad Core 2.6 GHz<br/>RAM: 8 GB<br/>GPU: GTX 970<br/>DirectX: v11",
    link: "https://www.mediafire.com/file/eiupwbgb8gdvag1",
  },
  {
    id: "g9",
    title: "BlazBlue Cross Tag Battle Deluxe Edition",
    img: "/img/blaz.jpg",
    size: "24 GB",
    desc: "Juego de lucha crossover con personajes anime y combates rápidos.",
    minReq: "OS: Win 7/8/10<br/>CPU: i5-4460<br/>RAM: 4 GB<br/>GPU: GTX 660<br/>DirectX: v11",
    recReq: "OS: Win 10<br/>CPU: i7-6700<br/>RAM: 8 GB<br/>GPU: GTX 1060<br/>DirectX: v11",
    link: "https://blizzpaste.com/Games/BLZBLUTB.txt",
  },
  {
    id: "g10",
    title: "Muse Dash",
    img: "/img/mushe.png",
    size: "2 GB",
    desc: "Juego rítmico divertido con estilo anime y música dinámica.",
    minReq: "OS: Win 7/10<br/>CPU: Core 2 Duo<br/>RAM: 2 GB<br/>GPU: Intel HD 4000<br/>DirectX: v9",
    recReq: "OS: Win 10<br/>CPU: i5-3570<br/>RAM: 4 GB<br/>GPU: GTX 750 Ti<br/>DirectX: v11",
    link: "https://datavaults.co/39okjrycdrpv/Muse_Dash_v6.0.1_ElEnemigos.rar",
  },
  {
    id: "g11",
    title: "GTA 4",
    img: "/img/gta4.jpg",
    size: "16 GB",
    desc: "Es GTA 5 pero con físicas xd",
    minReq:
      "OS: Win Vista/7<br/>CPU: Intel Core 2 Duo 1.8 GHz<br/>RAM: 1.5 GB<br/>GPU: 256 MB VRAM<br/>DirectX: v9",
    recReq: "OS: Win 10<br/>CPU: i5-2500K<br/>RAM: 4 GB<br/>GPU: GTX 760<br/>DirectX: v10",
    link: "https://blizzpaste.com/Games/GT4ACE1.txt",
  },
];
