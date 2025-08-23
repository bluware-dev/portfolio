/**
 * Componente fantasma para superponer contenido detrás del layout.
 *
 * @component
 * @param {ReactNode} children - Contenido superpuesto.
 * @param {string} [layer=-1] - Clase para style z-index (e.g. {zIndex: -1}, {zIndex: -10}, {zIndex: -50}...).
 * @param {string} [className] - Clases adicionales.
 * @returns {JSX.Element}
 */
export default function Ghost({ children, layer = -1, className = '' }) {
	return (
		<div
			className={`pointer-events-none absolute overflow-hidden ${className}`}
			style={{ zIndex: layer }}
		>
			{children}
		</div>
	);
}
