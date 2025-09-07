/**
 * Overlay
 *
 * Overlay de entrada que bloquea/oculta hasta que la app esté lista.
 *
 * @component
 * @param {boolean} isReady - Flag: fuentes + window.load completado.
 * @returns {JSX.Element}
 */
export default function Overlay({ isReady }) {
	return (
		<div
			style={{ willChange: 'transform, opacity' }}
			className={`pointer-events-none fixed inset-0 -z-5 delay-[250ms] duration-750 ${
				isReady
					? 'backdrop-blur-[3px] backdrop-brightness-80'
					: 'backdrop-brightness-50 sm:backdrop-blur-xl'
			}`}
		/>
	);
}
