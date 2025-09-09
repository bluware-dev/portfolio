import { useMemo, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import AnimatedOutlet from '@/components/templates/AnimatedOutlet';

import useElementSize from '@/hooks/useElementSize';

import Overlay from '@/components/atoms/Overlay';
import MainBackground from '@/components/molecules/MainBackground';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';

/**
 * LayoutPage
 *
 * Layout principal que orquesta overlay, navbar, footer y contenido.
 *
 * @component
 * @param {boolean} isReady - Flag: fuentes + window.load completado.
 * @returns {JSX.Element}
 */
export default function LayoutPage({ isReady }) {
	const outletRef = useRef(null);
	const { size, windowSize } = useElementSize(outletRef);

	const [isUnresponsive, setIsUnresponsive] = useState(false);
	const [hasUnresponsiveBypass, setHasUnresponsiveBypass] = useState(false);

	useEffect(() => {
		if (hasUnresponsiveBypass) {
			setIsUnresponsive(false);
			return;
		}
		// El timeout da tiempo a que el Outlet se renderize y escale con sus animaciones
		const timeout = setTimeout(() => {
			const effectiveSize = isUnresponsive
				? { width: 300, height: 500 }
				: size;

			const unresponsive =
				effectiveSize.height + 75 > windowSize.height ||
				effectiveSize.width + 75 > windowSize.width;

			setIsUnresponsive((prev) =>
				prev !== unresponsive ? unresponsive : prev
			);
		}, 500);

		return () => clearTimeout(timeout);
		// Ignorar warning de lint: isUnresponsive no entra como deps para evitar loops.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [size, windowSize, hasUnresponsiveBypass]);

	const pathname = useLocation().pathname;
	const pathStyle = useMemo(() => {
		const delay = pathname === '/' ? '1500ms' : '0ms';
		return {
			transition: `transform 1000ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}`,
		};
		// Ignorar warning de lint: queremos calcular pathStyle solo una vez al montar.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className={`h-screen ${!hasUnresponsiveBypass ? 'overflow-y-hidden' : ''}`}
		>
			{/* Overlay de entrada con delay y fade automático */}
			<Overlay isReady={isReady} />

			{/* Fondo de pantalla */}
			<MainBackground
				isReady={isReady}
				isUnresponsive={isUnresponsive}
				onBypass={() => setHasUnresponsiveBypass(true)}
			/>

			{!isUnresponsive ? (
				<div>
					<Navbar
						pathname={pathname}
						pathStyle={pathStyle}
						isReady={isReady}
						className="flex justify-center rounded-b-lg px-2 py-1.5 md:rounded-lg"
					/>

					{/* Contenido dinámico */}
					<main
						className="responsive-root relative z-30 pt-10"
						ref={outletRef}
					>
						<AnimatedOutlet />
					</main>
					<Footer
						pathname={pathname}
						pathStyle={pathStyle}
						isReady={isReady}
						className="rounded-t-lg px-1.5 md:rounded-lg"
					/>
				</div>
			) : null}
		</div>
	);
}
