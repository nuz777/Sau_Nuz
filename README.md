[![Ver sitio](https://img.shields.io/badge/Visitar-Sitio-blue?style=for-the-badge)](https://sau-nuz.vercel.app/)

# Documentación Completa del Proyecto SauNuz

## Descripción Generaaal

**SauNuz Tools** es un sitio web moderno e interactivo creado por **Nuz_v** y **Thempher09**. Este proyecto sirve como portal centralizado para acceder a recursos de programación, juegos y herramientas de software. Ofrece una experiencia visual atractiva con navegación fluida y componentes interactivos.

---

## 📁 Estructura del Proyecto

```
SAUNUZ_PROJECT/
├── index.html                          # Página principal del sitio
├── assets/
│   ├── pages/                          # Páginas de contenido
│   │   ├── programacion.html           # Lenguajes de programación
│   │   ├── juegos.html                 # Catálogo de juegos
│   │   └── herramientas.html           # Herramientas y software
│   ├── css/                            # Estilos y hojas de estilo
│   │   ├── bootstrap.min.css           # Framework Bootstrap
│   │   ├── font-awesome.min.css        # Iconos Font Awesome
│   │   ├── style.css                   # Estilos principales
│   │   ├── modal-intro.css             # Estilos para modales
│   │   └── styleforfiles.css           # Estilos para páginas de contenido
│   ├── js/                             # Scripts JavaScript
│   │   ├── script.js                   # Script principal
│   │   ├── jquery.min.js               # jQuery framework
│   │   ├── bootstrap.min.js            # Bootstrap JS
│   │   ├── slick.min.js                # Carrusel Slick
│   │   ├── jquery.shuffle.min.js       # Filtrado de portafolio
│   │   ├── jquery.easing.min.js        # Animaciones de easing
│   │   ├── jquery.countTo.min.js       # Contador animado
│   │   ├── bootstrap-progressbar.min.js # Barra de progreso
│   │   └── touchswipe.min.js           # Soporte táctil
│   ├── img/                            # Imágenes y recursos
│   │   ├── Portada y branding
│   │   ├── Tecnologías (js.png, python.png, etc.)
│   │   ├── Juegos (dirt4.jpg, GOTATWAR.jpg, etc.)
│   │   ├── Sistemas operativos (windows11.jpg, win10.jpg, etc.)
│   │   ├── Fondos (abstract-luxury-gradient-*.jpg)
│   │   └── Otros recursos gráficos
│   ├── fonts/                          # Fuentes personalizadas
│   │   ├── glyphicons-halflings-regular.*
│   │   └── fontawesome-webfont.*
│   └── docs/                           # Documentación adicional
│       └── Manual_SauNuz.pdf           # Manual de usuario en PDF
└── README.md                           # Este archivo

```

---

## 📄 Descripción de Archivos Principales

### **index.html**

**Archivo Principal - Página de Inicio**

- **Propósito:** Página de inicio del sitio con presentación principal
- **Características:**
  - Hero section con animaciones de escritura CSS
  - Navegación responsiva con navbar colapsable
  - Secciones informativas principales
  - Integración con Google Fonts (Open Sans, Varela, Share Tech Mono)
  - Meta tags para SEO y compatibilidad móvil
  - Favicon personalizado
  - Enlaces internos a las tres secciones principales

- **Dependencias:**
  - Bootstrap CSS
  - Font Awesome CSS
  - Style.css (estilos personalizados)
  - Modal-intro.css (estilos de modales)
  - jQuery y JavaScript personalizado

---

### 📄 **assets/pages/programacion.html**

**Lenguajes de Programación**

- **Propósito:** Catálogo interactivo de lenguajes de programación
- **Características:**
  - Grid de tarjetas con lenguajes (JavaScript, Python, Java, etc.)
  - Sistema de búsqueda en tiempo real
  - Modales informativos al hacer clic en cada lenguaje
  - Diseño responsivo
  - Animaciones fade-in
  - Iconos de lenguajes

- **Contenido:**
  - JavaScript, Python, Java, C++, C#, Go, Rust, etc.
  - Descripciones y casos de uso
  - Información adicional en modales

---

### 📄 **assets/pages/juegos.html**

**Catálogo de Juegos**

- **Propósito:** Showcase de juegos disponibles
- **Características:**
  - Grid de juegos con imágenes y tamaño de descarga
  - Búsqueda filtrada
  - Modales con información detallada
  - Lazy loading de imágenes
  - Diseño similar al de programación

- **Contenido:**
  - Dirt Rally 2.0 (35 GB)
  - DNF Duel (12 GB)
  - Dios de la Guerra: Ragnarok (114 GB)
  - Y más títulos xd

---

### 📄 **assets/pages/herramientas.html**

**Archivos y Herramientas de Software**

- **Propósito:** Catálogo de herramientas de sistema y software
- **Características:**
  - Tarjetas de herramientas con tamaño
  - Búsqueda integrada
  - Modales informativos
  - Organizadas por categoría

- **Contenido:**
  - Windows 10 Home (5.93 GB)
  - Windows 11 Pro (7.8 GB)
  - Reseteador de Contraseña (266 MB)
  - Otras herramientas útiles

---

## Archivos CSS

### **style.css**

- Estilos principales del sitio
- Animaciones CSS personalizadas:
  - `typing`: Efecto de escritura para el h1
  - `blink`: Efecto de parpadeo del cursor
  - `fadeUp`: Animación de entrada
- Tipografía personalizada (Share Tech Mono para headers)
- Colores principales: Azul (#00a2ff)
- Media queries para diseño responsive

### **modal-intro.css**

- Estilos específicos para modales de introducción
- Animaciones de apertura/cierre

### **styleforfiles.css**

- Estilos reutilizables para páginas de contenido
- Diseño de grid (mascotas-grid)
- Estilos de tarjetas (.card)
- Animaciones de fade-in

### **bootstrap.min.css**

- Framework CSS de Bootstrap (minificado)
- Sistema de grid responsive
- Componentes pre-diseñados

### **font-awesome.min.css**

- Librería de iconos Font Awesome
- Utilizada para íconos de navegación y elementos visuales

---

## ⚙️ Archivos JavaScript

### **script.js** (Principal)

Contiene funcionalidades clave:

1. **Navegación Affix**
   - La barra de navegación se fija cuando scrolleas
   - Responsive: se ajusta en pantallas menores a 768px

2. **ScrollSpy**
   - Resalta el elemento de navegación actual
   - Se actualiza al scrollear

3. **Smooth Scrolling**
   - Scroll suave a las secciones
   - Utiliza easing exponencial

4. **Counters (Contadores)**
   - Anima números cuando scrolleas a la sección
   - Efecto de conteo

5. **Progress Bars**
   - Barras de progreso animadas
   - Se activan al scrollear a la sección

6. **Team Carousel**
   - Carrusel de servicios
   - Soporte táctil (swipe)

7. **Slick Carousel**
   - Carrusel de reseñas y clientes
   - Navegación con flechas

8. **Shuffle.js (Filtro de Portafolio)**
   - Filtra elementos de portafolio
   - Reorganiza dinámicamente
   - Reinicia el layout cuando se cargan imágenes

---

### **jquery.min.js**

- jQuery v3.x minificado
- Requisito fundamental para el funcionamiento
- Manipulación del DOM y eventos

### **bootstrap.min.js**

- Componentes interactivos de Bootstrap
- Modales, dropdowns, tooltips
- Validación de formularios

### **slick.min.js**

- Plugin de carrusel profesional
- Navegación responsive
- Múltiples ítems por diapositiva

### **jquery.shuffle.min.js**

- Filtrado y reorganización de elementos
- Animaciones suaves

### **jquery.easing.min.js**

- Funciones de easing personalizadas
- Animaciones más naturales

### **jquery.countTo.min.js**

- Contador animado
- Efecto de incremento numérico

### **bootstrap-progressbar.min.js**

- Barras de progreso animadas
- Visualización de porcentajes

### **touchswipe.min.js**

- Detección de gestos táctiles
- Soporte para swipe izquierda/derecha

---

## Carpeta de Imágenes (assets/img/)

**Categorías de Imágenes:**

### Branding

- `saunuz_500 (1).png` - Logo del proyecto
- `SN-tools.jpg` - Banner de herramientas
- `favicon1.jpg` - Icono del sitio

### Lenguajes de Programación

- `js.png` - JavaScript
- `python.png` - Python
- `html.png` - HTML
- `css3.jpg` - CSS 3
- `Java.jpg` - Java

### Juegos

- `dirt4.jpg` - Dirt Rally 4
- `dirt2.0.jpg` - Dirt 2.0
- `GOTATWAR.jpg` - God of War
- `Dragon_Ball_FighterZ_portada.jpg` - Dragon Ball FighterZ
- `ets2.jpg` - Euro Truck Simulator 2
- `gta4.jpg` - Grand Theft Auto 4
- `juegoslivianosmodal.jpg` - Juegos Livianos

### Sistemas Operativos

- `windows11.jpg` - Windows 11
- `win10.jpg` - Windows 10
- `Wi11litepng` - Windows 11 Lite
- `Windows Login.jpg` - Pantalla de inicio Windows
- `android2.png` - Android alternativo
- `android.png` - Android v2

### Fondos

- `abstract-luxury-gradient-blue-background-smooth.jpg` - Degradado azul
- `abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner (1) (1).jpg` - Degradado oscuro

### Otros

- `browserconfig.xml` - Configuración del navegador
- `manifest.json` - Manifiesto PWA
- `67856-ezgif.com-video-to-gif-converter.gif` - Animación GIF
- `8077616.png` - Gráfico decorativo
- Múltiples imágenes decorativas y de contenido

---

## Carpeta de Fuentes (assets/fonts/)

### Glyphicons

- `glyphicons-halflings-regular.*` (WOFF2, WOFF, TTF, SVG, EOT)
- Iconos de Bootstrap

### Font Awesome

- `fontawesome-webfont.*` (WOFF2, TTF, WOFF, SVG, EOT)
- `FontAwesome.otf` - Formato OpenType

Formatos soportados para máxima compatibilidad:

- WOFF2: Formato moderno comprimido
- WOFF: Web Open Font Format
- TTF: TrueType Font
- SVG: Scalable Vector Graphics
- EOT: Embedded OpenType (IE antiguo)

---

## 📖 Documentación Adicional

### **Manual_SauNuz.pdf** (assets/docs/)

- Manual de usuario del proyecto
- Guía de uso de herramientas
- Instrucciones de instalación
- Información de contacto

---

## Dependencias Externas

### CDN Google Fonts

```html
https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Varela
https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap
```

### Librerías JavaScript Incluidas

- Bootstrap 4.x
- jQuery 3.x
- Font Awesome 4.x
- Slick Carousel
- jQuery Shuffle
- jQuery Easing
- jQuery CountTo
- Bootstrap Progress Bar
- Touch Swipe

---

## Características Responsive

- **Mobile First:** Diseño adaptable desde dispositivos móviles
- **Breakpoints principales:**
  - < 480px: Móvil
  - 480px - 768px: Tablet
  - > 768px: Desktop

- **Elementos responsivos:**
  - Navbar colapsable en móviles
  - Grid flexible
  - Imágenes adaptables
  - Fuentes escalables

---

## Funcionalidades Principales

1. ✅ **Búsqueda en tiempo real** - Filtrar contenido
2. ✅ **Modales informativos** - Pop-ups con detalles
3. ✅ **Carruseles** - Navegación visual de contenido
4. ✅ **Animaciones** - Transiciones suaves y atractivas
5. ✅ **Soporte táctil** - Gestos en dispositivos móviles
6. ✅ **Scroll smooth** - Navegación fluida
7. ✅ **Progressive Enhancement** - Funciona sin JavaScript

---

## SEO y Meta Tags

- Charset UTF-8
- Viewport configurado para dispositivos móviles
- Favicon personalizado
- Manifest para PWA
- Meta descripción y palabras clave

---

## Paleta de Colores Principal

- **Azul Primario:** #00a2ff
- **Fondos:** Degradados azules
- **Texto:** Blanco/Gris claro
- **Acentos:** Azul brillante

---

## Cómo Usar el Proyecto

1. **Abrir el sitio:**
   - Abre `index.html` en tu navegador
   - Navega por las tres secciones principales

2. **Buscar contenido:**
   - Usa la barra de búsqueda en cada página
   - Filtra por nombre o descripción

3. **Ver detalles:**
   - Haz clic en cualquier tarjeta
   - Se abrirá un modal con más información

4. **Navegar:**
   - Usa el menú de navegación
   - Scroll suave entre secciones

---

## Créditos

**Creadores:** Nuz_v & Thempher09

**Librerías utilizadas:**

- Bootstrap (Twitter)
- jQuery (jQuery Foundation)
- Slick Carousel (Ken Wheeler)
- Font Awesome (Fonticons)
- Google Fonts

---

## Notas de Desarrollo

- El proyecto utiliza HTML5 semántico
- CSS3 con animaciones modernas
- JavaScript vanilla con jQuery para compatibilidad
- Estructura modular y escalable
- Código limpio y bien organizado

---

## Seguridad

- Sin dependencias inseguras
- Recursos cargados desde CDNs confiables
- HTML validado según estándares W3C

---

**Versión:** Alpha
**Última actualización:** 2024
**Estado:** En desarrollo semi-activo SAUCE
