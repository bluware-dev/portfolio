/**
 * Componente atómico de fondo visual con soporte para imagen de fondo.
 *
 * No fija ni ancho ni alto, esos estilos deben controlarse desde el prop `className`
 * para mantener flexibilidad y evitar conflictos CSS.
 *
 * @component
 * @param {string} src - URL o path de la imagen de fondo.
 * @param {string} [className] - Clases TailwindCSS opcionales para controlar tamaño,
 *                               posicionamiento y otras propiedades visuales.
 * @returns {JSX.Element} Componente decorativo con imagen de fondo.
 */
export default function Background({ src, className = '' }) {
	return (
		<div
			className={`overflow-hidden bg-cover bg-no-repeat ${className}`}
			style={{ backgroundImage: `url('${src}')` }}
			aria-hidden="true"
			role="presentation"
		/>
	);
}
