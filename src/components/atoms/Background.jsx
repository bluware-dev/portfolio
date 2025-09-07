/**
 * Background
 *
 * Fondo decorativo con soporte para imagen.
 *
 * @component
 * @param {string} src - URL o path de la imagen de fondo.
 * @param {string} [className] - Clases CSS adicionales.
 * @returns {JSX.Element}
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
