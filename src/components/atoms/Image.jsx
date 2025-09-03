import { useEffect, useState } from 'react';

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
	fallback = 'nf-dev-react text-accent-red-dark flex scale-150 items-center justify-center text-5xl',
}) {
	const [error, setError] = useState(false);

	useEffect(() => {
		setError(false);
	}, [src]);

	if (error) {
		return <div className={`${fallback} `} role="img" aria-label={alt} />;
	}

	return (
		<img
			src={src}
			alt={alt}
			className={className}
			onError={() => setError(true)}
		/>
	);
}
