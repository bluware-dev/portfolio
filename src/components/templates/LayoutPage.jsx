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
	}, [pathname, isReady]);

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

			{/* Navbar */}
			<header
				style={{
					transform: `scale(${scale})`,
					transformOrigin: 'top',
					willChange: 'transform',
				}}
				className="fixed z-30 w-full overflow-hidden"
			>
				<div
					className={`rotatable ${isReady ? 'rotatable-end' : ''}`}
					style={pathStyle}
				>
					<Navbar
						barClassName="p-1.5"
						isReady={isReady}
						pathname={pathname}
					/>
				</div>
			</header>

			{/* Overlay de entrada con delay y fade automático */}
			<div
				style={{ willChange: 'transform, opacity' }}
				className={`pointer-events-none fixed inset-0 -z-5 backdrop-blur-[2px] delay-[250ms] duration-750 ${
					isReady
						? 'backdrop-brightness-75 sm:backdrop-blur-xs'
						: 'backdrop-brightness-50 sm:backdrop-blur-xl'
				}`}
			/>

			{/* Contenido dinámico */}
			<main>
				<ResponsiveWrapper>
					<AnimatedOutlet />
				</ResponsiveWrapper>
			</main>

			{/* Footer */}
			<footer
				style={{
					transform: `scale(${scale})`,
					transformOrigin: 'bottom',
					willChange: 'transform',
				}}
				className="fixed bottom-0 z-30 w-full"
			>
				<div
					className={`rotatable ${isReady ? 'rotatable-end' : ''}`}
					style={pathStyle}
				>
					{/* footer content*/}
					<Footer className="not-sm:h-8" isReady={isReady} />
				</div>
			</footer>
		</>
	);
}
