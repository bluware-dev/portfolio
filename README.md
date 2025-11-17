<div align="center">

# React & TailwindCSS Portfolio

**Portfolio modular y escalable construido con arquitectura atómica**

_Filosofías: ATOMIC DESIGN, DRY, KISS, UNIX, YAGNI_

---

<table align="center">
<tr>
<td align="center">
<a href="https://github.com/bluware-dev"><img src="https://github.com/bluware-dev.png" width="125px;"/><br /><b>Elian (Blu)</b></a><br/>Software Developer
</td>
</tr>
</table>

[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![React](https://img.shields.io/badge/React-19+-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7+-646CFF?logo=vite)](https://vitejs.dev/)

</div>

## 📁 Estructura del Proyecto

```
portfolio/
├── src/                   # Código fuente principal
│   ├── components/        # Componentes React (arquitectura atómica)
│   │   ├── atoms/         # Componentes básicos reutilizables
│   │   ├── molecules/     # Combinaciones de atoms
│   │   ├── organisms/     # Secciones complejas de UI
│   │   └── templates/     # Layouts y wrappers de página
│   ├── context/           # React Context providers
│   ├── data/              # Configuraciones y datos estáticos
│   ├── examples/          # Ejemplos de uso miscelaneos (sandbox, no tests)
│   ├── hooks/             # Custom hooks reutilizables
│   ├── lib/               # Utilidades y helpers
│   ├── pages/             # Componentes de página (routing)
│   └── styles/            # CSS global y variables
├── public/                # Assets estáticos (imágenes, logos)
└── ...                    # Configuración de herramientas
```

## 🛠️ Tech Stack

<div align="center">
  <img src="https://skillicons.dev/icons?i=js" height="40" alt="javascript logo" />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=react" height="40" alt="react logo" />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=tailwind" height="40" alt="tailwindcss logo" />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=vite" height="40" alt="vite logo" />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=html" height="40" alt="html5 logo" />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=css" height="40" alt="css logo" />
</div>

- **React 19+** - Hooks Modernos, Custom Hooks, Concurrent Features, Optimización con `useMemo`/`useCallback`, render profiling
- **React Router DOM** - Portfolio con filosofia minimalista **no-scroll**, 3 paginas: **[ Proyectos | Home | Contacto ]**
- **Vite 7** - Tree-shaking agresivo, builds optimizados
- **TailwindCSS 3** - Utility-first + CSS custom properties para theming dinámico
- **JavaScript** - JSDoc type annotations, altamente documentado, destructuring avanzado
- **Native Web APIs** - View Transitions, Intersection Observer, CSS Grid

## ⚡ Características Técnicas

**Optimización de Performance**

- Memoización estratégica con `React.memo` y hooks de optimización
- CSS animations con GPU acceleration (`will-change`, `transform`)
- Lazy loading inteligente de componentes y assets

**Sistema de Diseño**

- Tokens CSS (`--color-*`) para consistencia visual
- Responsive scaling con transform global para pixel-perfect UI
- Arquitectura de color de tres niveles: palette → functional → contextual

**Gestión de Estado**

- Context API para estado global sin overhead de Redux
- Custom hooks para encapsular lógica compleja (`useDelivery`, `useFakeFirstRender`)
- State machines implícitas para flows de UI complejos

## 🏗️ Filosofía de Desarrollo

- **🔥 DRY** - Cero duplicación de código, abstracciones inteligentes, encapsulación tanto semántica como funcional.
- **⚡ KISS** - Soluciones elegantes sobre clever hacks
- **🧩 Atomic Design** - Composición jerárquica estricta
- **📦 Separation of Concerns** - Lógica, presentación y datos desacoplados
- **🎯 Performance-First** - Fluidez garantizada, **LCP ~500 ms**, Optimizaciones Mobile, Bundle size optimizado, Assets comprimidos, JSDelivr

## 🚀 Getting Started

```bash
pnpm install && pnpm dev
```

## 📊 Análisis Técnico

**[Ver Análisis Completo con Gemini](https://g.co/gemini/share/2b2790735716)** - Auditoría detallada de arquitectura, patterns y decisiones de ingeniería.

**[Ver Documentacion Generada por DeepWiki](https://deepwiki.com/bluware-dev/portfolio)** - Documentacion generada por IA de arquitectura con diagramas incluidos.

## 📄 Licencia

Este proyecto está bajo la **BSD 3-Clause License**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

_Proyecto orientado a detalle y funcionamiento robusto._

</div>
