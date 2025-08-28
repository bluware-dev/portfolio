import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import Ghost from '@/components/atoms/Ghost';
import Background from '@/components/atoms/Background';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import ResponsiveWrapper from '@/components/templates/ResponsiveWrapper';
import AnimatedOutlet from '@/components/templates/AnimatedOutlet';

import useResponsiveScale from '@/hooks/useResponsiveScale';

/**
 * Layout simplificado con overlay de entrada y animado usando sólo Tailwind.
 * @param {Object} props
 * @param {boolean} props.isReady - `true` si fuentes + ventana están cargadas.
 */
export default function LayoutPage({ isReady }) {
	const pathname = useLocation().pathname;

	const pathStyle = useMemo(() => {
		const delay = pathname === '/' && isReady ? '1500ms' : '0ms';
		return {
			transition: `transform 1000ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}`,
		};
		// Ignorar warning de lint: queremos calcular pathStyle solo una vez al montar,
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const scale = useResponsiveScale();
	useEffect(() => {
		document.documentElement.style.setProperty('--scale', scale);
	}, [scale]);

	return (
		<>
			<Ghost layer={-10} className="top-0 left-0 h-[100vh] w-full">
				<Background
					className={`h-[60vh] w-full sm:h-[70vh] md:h-[85vh]`}
					src="/images/wallpaper.png"
				/>
				<div className="h-100 w-full bg-gradient-to-b from-[#1D2021] to-20%" />
			</Ghost>

			<Navbar
				pathname={pathname}
				pathStyle={pathStyle}
				scale={scale}
				isReady={isReady}
				className="rounded-b-lg p-1.5 md:rounded-lg"
			/>

			{/* Overlay de entrada con delay y fade automático */}
			<div
				style={{ willChange: 'transform, opacity' }}
				className={`pointer-events-none fixed inset-0 -z-5 backdrop-blur-[2px] delay-[250ms] duration-750 ${
					isReady
						? 'backdrop-brightness-80 sm:backdrop-blur-xs'
						: 'backdrop-brightness-50 sm:backdrop-blur-xl'
				}`}
			/>

			{/* Contenido dinámico */}
			<main>
				<ResponsiveWrapper>
					<AnimatedOutlet />
				</ResponsiveWrapper>
			</main>

			<Footer
				pathStyle={pathStyle}
				scale={scale}
				isReady={isReady}
				className="rounded-t-lg md:rounded-lg"
			/>
		</>
	);
}
