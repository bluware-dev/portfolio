/**
 * projects.js
 *
 * Mock de proyectos para showcase productivo.
 * Cada categoría (atomic, molecular, organism) agrupa proyectos
 * según nivel de complejidad/composición.
 * @example Ejemplo de slot vacío
 *  {
 *  	id: 'atm-1',
 *  	title: 'Atomic Component',
 *  	description: 'Breve...',
 *  	verbose: `Detalles técnicos...`,
 *  	url: 'https://...',
 *  	image: '/assets/placeholders/atomic-1.png',
 *  },
 */
export const projects = {
	atomico: [],

	molecular: [
		{
			id: 'portfolio',
			title: 'Portfolio',
			description: 'Portfolio estilo pixel retro-futurista cyber-noir.',
			verbose: `Stack: React | React Router | Vite | TailwindCSS

Custom Hooks:
- useDelivery, useIsReady, useFakedFirstRender
- useElementSize, useFakeFirstRender

Custom TailwindCSS:
- Modular styles/, @theme, @utilities, @font
- Tokens CSS, paleta cyber-noir, acentos neón

UI/UX:
- Atomic Design completo (atoms → templates)
- Responsividad avanzada con edge cases
- Escalado dinámico, pixel-perfect grid

Animaciones:
- Cards + Flip 3D: rotate-x/y/z, scale, translate-x/y/z
- Smooth Buttons: color, scaling, fonts
- Routing transitions, layered depth, glassmorphism

Performance & Optimizations:
- GPU layering, memoization, efficient re-renders
- will-change estratégico, lazy loading de efectos
- State management con hooks locales y Context API`,
			url: 'https://github.com/bluware-dev/portfolio',
			image: '/images/portfolio.webp',
		},
	],
	ecosistema: [],
};
