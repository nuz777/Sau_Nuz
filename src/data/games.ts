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
    minReq:
      "OS: Win 10<br/>CPU: i5-4590<br/>RAM: 8 GB<br/>GPU: GTX 970<br/>DirectX: v11",
    recReq:
      "OS: Win 10/11<br/>CPU: i7-6700K<br/>RAM: 16 GB<br/>GPU: RTX 2060<br/>DirectX: v11",
    link: "https://blizzpaste.com/Games/D1RT41.txt",
  },
  {
    id: "g2",
    title: "DNF Duel",
    img: "/img/dfn.jpg",
    size: "12 GB",
    desc: "Juego de lucha 2D con estilo anime y combates dinámicos.",
    minReq:
      "OS: Win 10<br/>CPU: i5-8600<br/>RAM: 8 GB<br/>GPU: GTX 1060<br/>DirectX: v11",
    recReq:
      "OS: Win 10/11<br/>CPU: i7-9700K<br/>RAM: 16 GB<br/>GPU: RTX 2070<br/>DirectX: v12",
    link: "https://blizzpaste.com/Games_2/DFNDUELNE1.txt",
  },
  {
    id: "g3",
    title: "God of War Ragnarok",
    img: "/img/GOTATWAR.jpg",
    size: "114 GB",
    desc: "Aventura épica basada en la mitología nórdica con Kratos y Atreus.",
    minReq:
      "OS: Win 10 64-bit<br/>CPU: i5-6600K<br/>RAM: 8 GB<br/>GPU: GTX 1060<br/>DirectX: v11",
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
    minReq:
      "OS: Win 7/8/10<br/>CPU: i5-4460<br/>RAM: 4 GB<br/>GPU: GTX 660<br/>DirectX: v11",
    recReq:
      "OS: Win 10<br/>CPU: i7-3770<br/>RAM: 8 GB<br/>GPU: GTX 1060<br/>DirectX: v11",
    link: "#",
  },
  {
    id: "g5",
    title: "Call of Duty MW3",
    img: "/img/COD.jpg",
    size: "14 GB",
    desc: "Shooter intenso con campaña, multijugador y acción rápida.",
    minReq:
      "OS: Win 7 64-bit<br/>CPU: i5-2500K<br/>RAM: 6 GB<br/>GPU: GTX 560<br/>DirectX: v11",
    recReq:
      "OS: Win 10 64-bit<br/>CPU: i7-3770<br/>RAM: 8 GB<br/>GPU: GTX 970<br/>DirectX: v11",
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
    recReq:
      "OS: Win 10/11<br/>CPU: i7-4770<br/>RAM: 8 GB<br/>GPU: GTX 1060<br/>DirectX: v11",
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
    recReq:
      "OS: Win 7/8/10<br/>CPU: i5-4670<br/>RAM: 8 GB<br/>GPU: GTX 760<br/>DirectX: v11",
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
    minReq:
      "OS: Win 7/8/10<br/>CPU: i5-4460<br/>RAM: 4 GB<br/>GPU: GTX 660<br/>DirectX: v11",
    recReq:
      "OS: Win 10<br/>CPU: i7-6700<br/>RAM: 8 GB<br/>GPU: GTX 1060<br/>DirectX: v11",
    link: "https://blizzpaste.com/Games/BLZBLUTB.txt",
  },
  {
    id: "g10",
    title: "Muse Dash",
    img: "/img/mushe.webp",
    size: "2 GB",
    desc: "Juego rítmico divertido con estilo anime y música dinámica.",
    minReq:
      "OS: Win 7/10<br/>CPU: Core 2 Duo<br/>RAM: 2 GB<br/>GPU: Intel HD 4000<br/>DirectX: v9",
    recReq:
      "OS: Win 10<br/>CPU: i5-3570<br/>RAM: 4 GB<br/>GPU: GTX 750 Ti<br/>DirectX: v11",
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
    recReq:
      "OS: Win 10<br/>CPU: i5-2500K<br/>RAM: 4 GB<br/>GPU: GTX 760<br/>DirectX: v10",
    link: "https://blizzpaste.com/Games/GT4ACE1.txt",
  },

  {
    id: "g12",
    title: "Metro Last Light",
    img: "/img/juegos/metrols.jpg",
    size: "9 GB",
    desc: "Shooter postapocalíptico de supervivencia en los túneles del metro de Moscú con atmósfera intensa y combate táctico.",
    minReq:
      "OS: Windows XP/Vista/7/8 64-bit<br/>CPU: Intel Core 2 Duo E5200 2.5 GHz / AMD Athlon II X2 270 3.0 GHz<br/>RAM: 2 GB<br/>GPU: GeForce GTS 250 / Radeon HD 4850 512 MB<br/>DirectX: 9.0c",
    recReq:
      "OS: Windows 7/8 64-bit<br/>CPU: Intel Core i5-2500K 3.3 GHz / AMD FX-8350<br/>RAM: 3 GB<br/>GPU: GeForce GTX 560 / Radeon HD 7850 1 GB<br/>DirectX: 11",
    link: "https://blizzpaste.com/Games/MTRLL1.txt",
  },

  {
    id: "g13",
    title: "GranBlue Fantasy Versus Rising",
    img: "/img/juegos/granblue.jpg",
    size: "20 GB",
    desc: "Luchador estilo anime con personajes de Granblue Fantasy, combos rápidos y modo historia cinematográfico.",
    minReq:
      "OS: Windows 10 64-bit<br/>CPU: Intel Core i3-6300 / AMD FX-4350<br/>RAM: 8 GB<br/>GPU: GeForce GTX 660 / Radeon R7 260X<br/>DirectX: 11",
    recReq:
      "OS: Windows 10 64-bit<br/>CPU: Intel Core i5-8400 / AMD Ryzen 5 2600<br/>RAM: 16 GB<br/>GPU: GeForce GTX 1060 6GB / Radeon RX 580 8GB<br/>DirectX: 11",
    link: "https://blizzpaste.com/Games_3/GBFTVSRIS1.txt",
  },

  {
    id: "g14",
    title: "Sniper Elite V2",
    img: "/img/juegos/Sniperelite.jpg",
    size: "8 GB",
    desc: "Shooter táctico ambientado en la Segunda Guerra Mundial centrado en el sigilo, francotirador y recreación balística detallada.",
    minReq:
      "OS: Windows XP/Vista/7 32/64-bit<br/>CPU: Intel Core 2 Duo 2.4 GHz / AMD Athlon X2<br/>RAM: 2 GB<br/>GPU: GeForce 8800 GT / Radeon HD 3870 512 MB<br/>DirectX: 9.0c",
    recReq:
      "OS: Windows 7 64-bit<br/>CPU: Intel Core i5-2400 / AMD Phenom II X4<br/>RAM: 4 GB<br/>GPU: GeForce GTX 560 / Radeon HD 7850 1 GB<br/>DirectX: 11",
    link: "https://www.mediafire.com/file/flgg8v4wh8y5p5o/SNIPRELV2_by_BlizzBoyGames.rar",
  },

  {
    id: "g15",
    title: "Sniper Warrior 2",
    img: "/img/juegos/sniperw2.jpg",
    size: "8 GB",
    desc: "Shooter de francotirador con foco en sigilo, mapas amplios y balística realista. Campaña y modos cooperativos/multijugador.",
    minReq:
      "OS: Windows 7 64-bit<br/>CPU: Intel Core i3-2100 / AMD Phenom II X2 3.0 GHz<br/>RAM: 4 GB<br/>GPU: GeForce GTX 460 / Radeon HD 5850 1 GB<br/>DirectX: 10",
    recReq:
      "OS: Windows 10 64-bit<br/>CPU: Intel Core i5-2500K / AMD FX-6300<br/>RAM: 8 GB<br/>GPU: GeForce GTX 760 / Radeon R9 270X 2 GB<br/>DirectX: 11",
    link: "https://blizzpaste.com/Games/SNPREGW21.txt",
  },

  {
    id: "g16",
    title: "Dirt 3",
    img: "/img/juegos/Dirt3.jpg",
    size: "8 GB",
    desc: "Simulador de rally arcade-realista con tramos en diferentes superficies, modo multijugador y manejo accesible pero profundo.",
    minReq:
      "OS: Windows XP/Vista/7 64-bit<br/>CPU: Intel Core 2 Duo 2.0 GHz / AMD Athlon X2 64 2.4 GHz<br/>RAM: 2 GB<br/>GPU: GeForce 8800 GT / Radeon HD 3850 512 MB<br/>DirectX: 9.0c",
    recReq:
      "OS: Windows 7/10 64-bit<br/>CPU: Intel Core i5-2500K / AMD FX-6300<br/>RAM: 4 GB<br/>GPU: GeForce GTX 560 Ti / Radeon HD 7850 1 GB<br/>DirectX: 11",
    link: "https://blizzpaste.com/Games/D1IRT31.txt",
  },

   {
    id: "g17",
    title: "Hades 2",
    img: "/img/juegos/Hades.jpg",
    size: "12 GB",
    desc: "Roguelike de acción inspirada en la mitología griega con combate rápido, progresión permanente y estilo artístico vibrante.",
    minReq:
      "OS: Windows 10 64-bit<br/>CPU: Intel Core i5-4460 / AMD FX-8300<br/>RAM: 8 GB<br/>GPU: GeForce GTX 1050 / Radeon RX 560 2 GB<br/>DirectX: 11",
    recReq:
      "OS: Windows 10/11 64-bit<br/>CPU: Intel Core i5-7600K / AMD Ryzen 5 2600<br/>RAM: 16 GB<br/>GPU: GeForce GTX 1660 / Radeon RX 590 4 GB<br/>DirectX: 12",
    link: "https://blizzpaste.com/Games_2/HDES21.txt",
  },

  {
    id: "g18",
    title: "Call of Duty Modern Warfare 3 remastered",
    img: "/img/juegos/CODMW19.jpg",
    size: "175 GB GB",
    desc: "Remaster de shooter moderno con campaña mejorada, multijugador clásico y gráficos optimizados.",
    minReq:
      "OS: Windows 10 64-bit<br/>CPU: Intel Core i5-2500K / AMD Phenom II X4 965<br/>RAM: 8 GB<br/>GPU: GeForce GTX 760 / Radeon HD 7850<br/>DirectX: 11",
    recReq:
      "OS: Windows 10 64-bit<br/>CPU: Intel Core i7-4790 / AMD Ryzen 5 1500X<br/>RAM: 12 GB<br/>GPU: GeForce GTX 980 / Radeon R9 390<br/>DirectX: 11",
    link: "https://blizzpaste.com/?v=9194",
  },

   {
    id: "g19",
    title: "Left 4 Dead 2",
    img: "/img/juegos/left2.jpg",
    size: "30 GB",
    desc: "Shooter cooperativo de supervivencia zombie con campañas intensas, modo Versus y escenarios cargados de tensión.",
    minReq:
      "OS: Windows XP/Vista/7 32-bit/64-bit<br/>CPU: Intel Core 2 Duo 2.4 GHz / AMD Athlon 64 X2 2.8 GHz<br/>RAM: 2 GB<br/>GPU: GeForce 6600 / Radeon X800<br/>DirectX: 9.0c",
    recReq:
      "OS: Windows 7 32-bit/64-bit<br/>CPU: Intel Core 2 Duo E6600 / AMD Athlon 64 X2 6400+<br/>RAM: 4 GB<br/>GPU: GeForce 8600 / Radeon HD 3870<br/>DirectX: 9.0c",
    link: "https://blizzpaste.com/Games/L4DAD1.txt",
  },

    {
    id: "g20",
    title: "Halo Master Chief Collection",
    img: "/img/juegos/halo.jpg",
    size: "120 GB",
    desc: "Colección de shooters sci-fi con campañas de Halo 1 a Halo 4, multijugador clásico y soporte para Xbox Live en PC.",
    minReq:
      "OS: Windows 10 64-bit<br/>CPU: Intel Core i5-4440 / AMD FX-8300<br/>RAM: 8 GB<br/>GPU: GeForce GTX 970 / Radeon RX 570 4 GB<br/>DirectX: 11",
    recReq:
      "OS: Windows 10 64-bit<br/>CPU: Intel Core i7-7700 / AMD Ryzen 5 1600<br/>RAM: 16 GB<br/>GPU: GeForce GTX 1070 / Radeon RX 580 8 GB<br/>DirectX: 11",
    link: "https://blizzpaste.com/Games/HLRCTMS1.txt",
  },

  {
    id: "g21",
    title: "NFS Rivals Deluxe Edition",
    img: "/img/juegos/nfs.jpg",
    size: "17 GB",
    desc: "Carreras de mundo abierto con policía dinámica, rendimiento y copas offline/multijugador.",
    minReq:
      "OS: Windows 7 64-bit<br/>CPU: Intel Core i5-3570 / AMD FX-6350<br/>RAM: 6 GB<br/>GPU: GeForce GTX 660 / Radeon HD 7870<br/>DirectX: 11",
    recReq:
      "OS: Windows 10 64-bit<br/>CPU: Intel Core i7-4770 / AMD FX-8350<br/>RAM: 16 GB<br/>GPU: GeForce GTX 1060 / Radeon R9 380X<br/>DirectX: 11",
    link: "https://blizzpaste.com/Games/NFSPRV.txt",
  },

  {
    id: "g22",
    title: "WRC 9",
    img: "/img/juegos/WRC9.jpg",
    size: "17 GB",
    desc: "Simulador rally con físicas realistas, circuitos oficiales y condiciones climáticas dinámicas.",
    minReq:
      "OS: Windows 7/8.1/10 64-bit<br/>CPU: Intel Core i3-2130 / AMD FX-4300<br/>RAM: 8 GB<br/>GPU: GeForce GTX 660 / Radeon R9 270X<br/>DirectX: 11",
    recReq:
      "OS: Windows 10 64-bit<br/>CPU: Intel Core i5-4460 / AMD FX-8350<br/>RAM: 16 GB<br/>GPU: GeForce GTX 1060 3 GB / Radeon RX 580 4 GB<br/>DirectX: 11",
    link: "https://blizzpaste.com/Games/WRC9.txt",
  },
];
