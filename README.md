# Gabriel Mattesich — Personal Portfolio

> **Senior Backend Engineer & Software Architect**  
> Especializado en arquitectura de backend, sistemas distribuidos de alta disponibilidad, microservicios orientados a eventos y soluciones transaccionales para el sector FinTech regional (Argentina & Paraguay).

---

## 🚀 Resumen del Proyecto

Este repositorio contiene el código fuente del portafolio personal y técnico de **Gabriel Mattesich**, construido con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**. 

El diseño prioriza una estética sobria y moderna de **Dark Engineering** inspirada en plataformas de infraestructura crítica, combinando microinteracciones fluidas con **Framer Motion**, tipografía monoespaciada para elementos técnicos y soporte bilingüe en tiempo real (**Español** / **Inglés**).

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) |
| **Lenguaje** | [TypeScript 5](https://www.typescriptlang.org/) con tipado estricto |
| **Estilos & UI** | [Tailwind CSS 3.4](https://tailwindcss.com/) + variables CSS de ingeniería oscura |
| **Animaciones** | [Framer Motion](https://www.framer.com/motion/) (Loader, animaciones de entrada, carrusel y píldora deslizante) |
| **Iconografía** | [Lucide React](https://lucide.dev/) |
| **Métricas en Vivo** | [React GitHub Calendar](https://grubersjoe.github.io/react-github-calendar/) |
| **Gestor de Paquetes** | [pnpm](https://pnpm.io/) |

---

## ✨ Características Principales

- **Terminal Boot Sequence Loader**: Pantalla de carga animada que simula la inicialización de un runtime de microservicios y clusters de alta disponibilidad, con barra de progreso, atajo de escape (`Esc`), y persistencia en `sessionStorage` para no interrumpir al usuario en recargas consecutivas.
- **Navbar Responsive & Interactivo**:
  - Avatar circular con resplandor sutil y punto de estado activo animado (`dot pulse z-20`).
  - Identificador técnico con subtítulo adaptativo (`gabriel.mattesich() | Since 1996 |`).
  - Selector de idioma bilingüe (**ES** / **EN**) con píldora deslizante `layoutId`.
  - Menú desplegable táctil optimizado para móviles sin desbordamiento horizontal.
- **Pilares de Arquitectura**: 4 tarjetas de principios de ingeniería:
  - *Domain-Driven Design (DDD) & Event-Driven*
  - *Resiliencia & Concurrencia Masiva*
  - *Cloud-Native & Observabilidad Proactiva (AWS / Datadog / Opsgenie)*
  - *IA Generativa en Procesos de Negocio*
- **Historial de Producción (Trayectoria)**: Línea de tiempo vertical detallando roles, alcances transaccionales, cumplimiento con estándares **PCI DSS v3 & v4**, procesadores de pago y tecnologías utilizadas (Personal Pay, Naranja X, IncluIT, Infosistemas).
- **Tech Stack & Caja de Herramientas**: Especialidades clasificadas en Backend, Cloud, Arquitectura, Datos & Mensajería, Observabilidad y GenAI, junto a la integración opcional del calendario de contribuciones de GitHub.
- **Carrusel Infinito de Credenciales (Eje X)**:
  - Desplazamiento continuo acelerado por GPU con efecto de desvanecimiento lateral (*edge fade masks*).
  - Pausa interactiva al pasar el cursor en escritorio (*hover pause*) y soporte táctil con botón toggle `[⏸ Pausar / ▶ Reanudar]` en móviles.
  - Enlaces de verificación directos a Coursera, Udemy y Platzi.
- **Llamado a la Acción (CTA) & Contacto**: Botón interactivo de copiado rápido de correo (`mattesichgabriel@gmail.com`) con notificación flotante (*Toast*) y enlace directo a LinkedIn.

---

## 📂 Estructura del Código

```text
src/
├── app/
│   ├── layout.tsx                # Configuración de fuentes Geist, metadata y theme provider
│   ├── page.tsx                  # Entrada principal y orquestación de secciones
│   └── globals.css               # Utilidades globales (bg-grid, hero-glow, card-hover-border)
├── components/
│   ├── portfolio/
│   │   ├── InitialLoader.tsx     # Terminal Boot Sequence loader
│   │   ├── Navbar.tsx            # Header animado con avatar, selector de idioma y drawer móvil
│   │   ├── HeroSection.tsx       # Titular de alta disponibilidad, métricas y acciones
│   │   ├── PillarsSection.tsx    # 4 pilares de filosofía arquitectónica
│   │   ├── ExperienceSection.tsx # Línea de tiempo vertical de trayectoria
│   │   ├── StackSection.tsx      # Categorías técnicas y actividad de GitHub
│   │   ├── CredentialsSection.tsx# Carrusel continuo horizontal de certificaciones
│   │   ├── ContactSection.tsx    # Banner CTA de contacto
│   │   ├── Footer.tsx            # Pie de página y enlaces
│   │   └── Toast.tsx             # Feedback flotante al copiar email
│   └── ui/                       # Componentes base Radix UI / Shadcn
├── lib/
│   ├── portafolio-data.ts        # Contenido centralizado bilingüe (ES / EN)
│   └── utils.ts                  # Utilidades comunes (cn helper)
├── types/
│   └── portfolio.type.ts         # Interfaces y modelos TypeScript estrictos
└── assets/                       # Assets estáticos (profile.png)
```

---

## 💻 Comandos de Desarrollo

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo en http://localhost:3000
pnpm dev

# Ejecutar el linter (ESLint)
pnpm lint

# Compilar build estático de producción
pnpm build

# Iniciar el build de producción
pnpm start
```

---

## 📄 Licencia

© 2026 Gabriel Mattesich. Todos los derechos reservados.
