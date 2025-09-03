/**
 * projects.js
 *
 * Mock de proyectos para showcase productivo.
 * Cada categoría (atomic, molecular, organism) agrupa proyectos
 * según nivel de complejidad/composición.
 */

export const projects = {
	atomico: [
		// Ejemplo de slot vacío
		// {
		//   id: 'atm-1',
		//   title: 'Atomic Component',
		//   description: 'Breve...',
		//   verbose: `Detalles técnicos...`,
		//   url: 'https://...',
		//   image: '/assets/placeholders/atomic-1.png',
		// },
	],

	molecular: [
		{
			id: 'portfolio',
			title: 'Portfolio',
			description: 'Portfolio estilo pixel retro-futurista cyber-noir.',
			verbose: `Stack: React | React Router | Vite | TailwindCSS
			
Custom Hooks: useDelivery, useIsReady, useFakeFirstRender

Custom TailwindCSS: Modular CSS styles/, @theme, @utilities, @font

UI/UX: Atomic Design | Responsividad Dedicada | Duration/Delays cronometrados

Animaciones:
- Cards + Flip 3D: rotate-x/y/z, scaling, translates-x/y/z
- Smooth Buttons: color, scaling, fonts
- Routing Smooth Transitions`,
			url: 'https://github.com/bluware-dev/portfolio',
			image: '/images/portfolio.webp',
		},
	],
	ecosistema: [],
};
