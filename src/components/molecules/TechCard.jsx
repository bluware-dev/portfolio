import { useCallback, useRef, useState, memo, useMemo } from 'react';
import Image from '@/components/atoms/Image';

const BASE_CLASSES =
	'group w-12 h-12 rounded-lg bg-neutral-900/70 relative grid place-items-center cursor-pointer';
const IMAGE_CLASSES = 'mx-auto max-w-[85%] duration-500';

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
 * @param {boolean} [props.isReady] - Estado de carga para sombras dinámicas.
 * @returns {JSX.Element} Tarjeta de tecnología estilizada y animable.
 */
function TechCard({
	name,
	icon,
	color,
	type,
	iconClassName = '',
	animateIconClassName = '',
	isReady = false,
}) {
	const [animating, setAnimating] = useState(false);
	const timeoutRef = useRef();

	// Mover lógica de clases DENTRO del componente - BRUTAL
	const cardClasses = useMemo(
		() =>
			`duration-300 sm:shadow-sm sm:not-hover:delay-0 sm:hover:delay-0 ${
				isReady
					? 'sm:shadow-accent-red sm:hover:sm:shadow-accent-red-bold'
					: 'sm:shadow-none'
			}`,
		[isReady]
	);

	const trigger = useCallback(() => {
		if (animating) return;

		clearTimeout(timeoutRef.current);
		setAnimating(true);
		timeoutRef.current = setTimeout(() => setAnimating(false), 1000);
	}, [animating]);

	const animationClasses = useMemo(
		() =>
			animating
				? 'scale-125 translate-z-12 -translate-y-4 rotate-y-180 duration-500 ease-out transform-gpu z-10 relative'
				: 'scale-100 translate-z-0 translate-y-0 rotate-y-0 duration-300 ease-in transform-gpu z-0 relative',
		[animating]
	);

	const fontAnimationClasses = useMemo(
		() =>
			animating
				? 'rotate-x-180 rotate-z-180 duration-500 ease-in-out'
				: 'rotate-x-0 rotate-z-0 duration-300 ease-in',
		[animating]
	);

	return (
		<div
			onClick={trigger}
			onMouseEnter={trigger}
			className={`${BASE_CLASSES} ${cardClasses}`}
		>
			<div className="grid h-auto w-auto place-items-center perspective-near perspective-origin-center transform-3d">
				{type === 'font' ? (
					<div
						className={`text-5xl ${color} ${icon} ${fontAnimationClasses} ${animationClasses} ${iconClassName} ${animating ? animateIconClassName : ''}`}
					/>
				) : (
					<div
						className={`${fontAnimationClasses} ${animationClasses}`}
					>
						<Image
							src={icon}
							alt={name}
							className={`${IMAGE_CLASSES} ${animating ? iconClassName : animateIconClassName}`}
						/>
					</div>
				)}
			</div>
			<span className="sr-only">{name}</span>
		</div>
	);
}

export default memo(TechCard);
