import { useEffect, useState } from 'react';

import Background from '@/components/atoms/Background';
import Ghost from '@/components/atoms/Ghost';

/**
 * ResponsiveWrapper
 *
 * Componente de layout responsivo a pantalla completa.
 * - Escala el contenido de la app proporcionalmente al tamaño de la ventana.
 * - Aplica límites mínimos/máximos al escalado para evitar distorsiones.
 * - Muestra overlays si el viewport es demasiado angosto o bajo para garantizar usabilidad.
 *
 * Casos especiales:
 * - Si se da el caso horizontal-unresponsive → se muestra un overlay solicitando rotar el dispositivo.
 * - Si se da el caso full-unresponsive → se muestra un overlay de error.
 *
 * Escalado:
 * - Basado en proporciones respecto a un diseño de referencia de 1920x1080.
 * - Bonus dinámico añadido para tamaños incómodos (móviles pequeños / pantallas altas).
 * - El `scale` final es la media de ambos ratios con bonuses acotados (máx: 1).
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elementos hijos a renderizar escalados.
 * @returns {JSX.Element} Contenedor escalado o pantalla de advertencia según viewport.
 */
export default function ResponsiveWrapper({ children }) {
	const [isTooShort, setIsTooShort] = useState(false);
	const [isTooFlat, setIsTooFlat] = useState(false);
	const [scale, setScale] = useState(1);
	const BASE_WIDTH = 1920; // anchura de diseño base
	const BASE_HEIGHT = 1080; // altura de diseño base

	useEffect(() => {
		const clamp = (v, min = 0.5, max = 1) =>
			Math.max(min, Math.min(max, v));

		const calculateScale = () => {
			const w = window.innerWidth;
			const h = window.innerHeight;

			setIsTooShort(
				w < 1280 &&
					(h <= 330 ||
						(w <= 510 && h <= 400) ||
						(w > 880 && h <= 420))
			);
			setIsTooFlat(
				w <= 280 ||
					(w < 380 && h <= 540) ||
					(w > 1024 && h <= 280) ||
					(w > 1024 && h <= 440) ||
					(w > 1366 && h <= 460) ||
					(w > 1920 && h <= 768)
			);

			const ratioW = clamp(w / BASE_WIDTH);
			const ratioH = clamp(h / BASE_HEIGHT);

			const bonusW = w < 650 ? 0.3 : 0.05;
			const bonusH = h > 700 ? 0.3 : 0.05;

			const newScale = Math.min(
				1,
				(ratioW + ratioH) / 2 + (bonusW + bonusH) / 4
			);

			setScale(newScale);
		};

		calculateScale();
		window.addEventListener('resize', calculateScale);
		return () => window.removeEventListener('resize', calculateScale);
	}, []);

	if (isTooShort) {
		return (
			<div className="pointer-events-none fixed inset-0 z-50 flex flex-col items-center justify-center text-center">
				<Ghost layer={-10} className="absolute inset-0 -z-10">
					<Background
						src="/images/wallpaper.png"
						className="h-full w-full object-cover"
					/>
				</Ghost>
				<div className="pointer-events-none fixed inset-0 -z-5 backdrop-blur-xs backdrop-brightness-25" />
				<div className="animate-rotate-90 nf-fa-mobile_phone text-pearl text-9xl" />
				<p className="text-pearl text-xl">
					Por favor, rotá tu dispositivo a vertical para ver el
					contenido.
				</p>
			</div>
		);
	}
	if (isTooFlat) {
		return (
			<div className="pointer-events-none fixed inset-0 z-50 flex flex-col items-center justify-center text-center">
				<Ghost layer={-10} className="absolute inset-0 -z-10">
					<Background
						src="/images/wallpaper.png"
						className="h-full w-full object-cover"
					/>
				</Ghost>
				<div className="fixed inset-0 -z-5 backdrop-blur-xs backdrop-brightness-25" />
				<div className="text-accent-purple-bold font-bigblueterm grid text-5xl">
					<span className="animate-spin">?</span>
					<div className="flex">
						<span className="mx-4 animate-spin">?</span>
						<span className="nf-md-cat text-6xl"></span>
						<span className="mx-4 animate-spin">?</span>
					</div>
					<span className="animate-spin">?</span>
				</div>
			</div>
		);
	}

	return (
		<div className="flex h-screen w-screen items-center justify-center overflow-hidden">
			<div
				className="responsive-h h-full w-full origin-top"
				style={{ transform: `scale(${scale})` }}
			>
				{children}
			</div>
		</div>
	);
}
