import { useState } from 'react';

/**
 * Componente de imagen con soporte para fallback (clase de ícono).
 *
 * @component
 * @param {string} src - URL de la imagen principal.
 * @param {string} alt - Texto alternativo.
 * @param {string} [className] - Clases opcionales para la imagen.
 * @param {string} [fallback='nf-dev-react text-color-pearl'] - Clase de fallback (ej. NerdFonts).
 * @returns {JSX.Element} Imagen o fallback.
 */
export default function Image({
	src,
	alt,
	className = '',
	fallback = 'nf-dev-react',
}) {
	const [error, setError] = useState(false);

	if (error) {
		return (
			<div
				className={`${fallback} text-accent-red-dark scale-150 text-5xl`}
				role="img"
				aria-label={alt}
			/>
		);
	}

	return (
		<img
			src={src}
			alt={alt}
			className={className}
			loading="lazy"
			onError={() => {
				console.error(
					`[Image] Fallo al cargar "${src}". Usando fallback: "${fallback}"`
				);
				setError(true);
			}}
		/>
	);
}
