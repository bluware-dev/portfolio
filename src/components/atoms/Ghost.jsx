/**
 * Ghost
 *
 * Contenedor para contenido posicionado detrás del layout (z-index negativo).
 *
 * @component
 * @param {string} [layer] - Clase/valor para controlar z-index.
 * @param {React.ReactNode} children
 * @param {string} [className]
 * @returns {JSX.Element}
 */
export default function Ghost({ layer = -10, children, className }) {
	return (
		<div
			className={`pointer-events-none absolute overflow-hidden ${className}`}
			style={{ zIndex: layer }}
		>
			{children}
		</div>
	);
}
