import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import AnimatedOutlet from '@/components/templates/AnimatedOutlet';
import ResponsiveWrapper from '@/components/templates/ResponsiveWrapper';

import useResponsiveScale from '@/hooks/useResponsiveScale';

import Overlay from '../atoms/Overlay';

import Background from '@/components/atoms/Background';
import Ghost from '@/components/atoms/Ghost';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';

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
			<Overlay isReady={isReady} />

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
