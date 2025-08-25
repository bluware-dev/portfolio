import { useCallback, useEffect, useRef, useState } from 'react';

import Image from '@/components/atoms/Image';

const BASE_CLASSES = `group w-12 h-12 rounded-lg bg-neutral-900/70`;
const IMAGE_CLASSES = 'mx-auto max-w-[85%]';

/**
 * Componente molecular que representa una tarjeta de tecnología con icono, color y animación opcional.
 *
 * @component
 * @param {Object} props - Props del componente.
 * @param {string} props.name - Nombre de la tecnología.
 * @param {string} props.icon - URL o path del icono de la tecnología.
 * @param {string} props.color - Color principal para la tarjeta.
 * @param {'font'|'image'} props.type - Tipo de icono (fuente o imagen).
 * @param {string} [props.iconClassName] - Clases opcionales para el icono.
 * @param {string} [props.animateIconClassName] - Clases opcionales para animación del icono.
 * @param {string} [props.className] - Clases opcionales para la tarjeta completa.
 * @returns {JSX.Element} Tarjeta de tecnología estilizada y animable.
 */
export default function TechCard({
	name,
	icon,
	color,
	type,
	iconClassName = '',
	animateIconClassName = '',
	className = '',
}) {
	const [animating, setAnimating] = useState(false);
	const trash = useRef([]);

	const trigger = useCallback(() => {
		setAnimating(true);
		trash.current.push(setTimeout(() => setAnimating(false), 1000));
	}, []);

	useEffect(() => {
		const timeouts = trash.current;
		return () => timeouts.forEach(clearTimeout);
	}, []);

	const animationClasses = animating
		? 'scale-125 translate-z-12 -translate-y-4 rotate-y-180 duration-500 ease-out transform-gpu z-10 relative'
		: 'scale-100 translate-z-0 translate-y-0 rotate-y-0 duration-300 ease-in transform-gpu z-0 relative';

	const fontAnimationClasses = animating
		? 'rotate-x-180 rotate-z-180 duration-500 ease-in-out'
		: 'rotate-x-0 rotate-z-0 duration-300 ease-in';

	const fontClasses = `text-5xl ${color} ${icon}`;
	return (
		<div
			onClick={trigger}
			onMouseEnter={trigger}
			className={`${BASE_CLASSES} relative grid place-items-center ${className}`}
		>
			<div className="grid h-auto w-auto place-items-center perspective-near perspective-origin-center transform-3d">
				{type === 'font' ? (
					<div
						className={`${fontClasses} ${fontAnimationClasses} ${animationClasses} ${iconClassName} ${
							animating ? animateIconClassName : ''
						}`}
					/>
				) : (
					<div
						className={`${fontAnimationClasses} ${animationClasses}`}
					>
						<Image
							src={icon}
							alt={name}
							className={`${IMAGE_CLASSES} ${
								animating ? iconClassName : animateIconClassName
							} duration-500`}
						/>
					</div>
				)}
			</div>
			<span className="sr-only">{name}</span>
		</div>
	);
}
