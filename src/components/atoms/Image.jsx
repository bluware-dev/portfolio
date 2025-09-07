import { useEffect, useState } from 'react';

/**
 * Image
 *
 * Imagen con fallback (clase de icono) y accesibilidad básica.
 *
 * @component
 * @param {string} src - Fuente de la imagen.
 * @param {string} alt - Texto alternativo.
 * @param {string} [className]
 * @param {string} [fallback='nf-dev-react text-color-pearl'] - Clase de fallback.
 * @returns {JSX.Element}
 */
export default function Image({
	src,
	alt,
	className,
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
