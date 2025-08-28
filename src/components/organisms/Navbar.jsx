import React, { useMemo, useCallback, useId } from 'react';
import { useNavigate } from 'react-router-dom';

import Bar from '@/components/atoms/Bar';
import Button from '@/components/atoms/Button';
import { navigateWithViewTransition } from '@/lib/navigateWithViewTransition';

/**
 * Navbar
 *
 * Componente de navegación principal, dependiente de LayoutPage.
 * Recibe props calculadas externamente para animaciones, escala y estilos dinámicos.
 *
 * @param {Object} props
 * @param {string} props.pathname - Ruta actual, usada para resaltar botones activos.
 * @param {Object} props.pathStyle - Estilos dinámicos aplicados al contenedor para animaciones (transform, delays, etc.).
 * @param {number} props.scale - Factor de escala aplicado al Navbar según viewport.
 * @param {boolean} props.isReady - Indica si la app y fuentes están listas; activa animaciones de entrada.
 * @param {string} [props.className] - Clases CSS opcionales adicionales para el contenedor.
 * @returns {JSX.Element} Navbar renderizado con animaciones y escala responsiva.
 */
export default function Navbar({
	pathname,
	pathStyle,
	scale,
	isReady,
	className = '',
}) {
	const transformStyle = useMemo(
		() => ({
			transform: `scale(${Number(scale)})`,
			transformOrigin: 'top center',
			willChange: 'transform',
		}),
		[scale]
	);

	const navigate = useNavigate();
	const uid = useId();

	const handleNav = useCallback(
		(to) => () => navigateWithViewTransition(navigate, to),
		[navigate]
	);

	const btnBase =
		'border-dg-1 px-1 py-[1px] text-[1rem] duration-[100ms] ease-in hover:scale-105 hover:font-extrabold active:scale-100 sm:scale-100 sm:text-[1.15rem]';

	const navItems = useMemo(
		() => [
			{
				to: '/projects',
				label: 'Proyectos',
				smPx: 'sm:px-2',
			},
			{
				to: '/',
				label: 'Home',
				smPx: 'sm:px-2',
			},
			{
				to: '/contact',
				label: 'Contacto',
				smPx: 'sm:px-3',
			},
		],
		[]
	);

	const buttons = navItems.map(({ to, label, smPx }) => {
		const active = pathname === to;
		const stateClasses = active
			? 'bg-lg-1 text-dg-2 font-extrabold'
			: 'bg-dg-2 text-lg-1 hover:bg-lg-3 hover:text-dg-2';

		return (
			<Button
				key={to}
				onClick={pathname !== to ? handleNav(to) : undefined}
				className={`${btnBase} ${smPx} ${stateClasses}`}
				aria-current={active ? 'page' : undefined}
			>
				{label}
			</Button>
		);
	});

	return (
		<header
			style={transformStyle}
			className="fixed top-0 z-30 w-full"
			aria-hidden="false"
		>
			<div
				className={`rotatable ${isReady ? 'rotatable-end' : ''}`}
				style={pathStyle}
			>
				<Bar
					left={
						<span
							aria-hidden="true"
							className="nf-dev-react text-color-pearl inline-flex h-0 items-center text-5xl sm:text-6xl md:text-7xl"
						/>
					}
					center={
						<div
							className={`space-x-2 ${pathname === '/' ? 'delay-[2000ms]' : 'delay-[500ms]'} duration-1000 ${
								isReady ? 'opacity-100' : 'opacity-0'
							}`}
						>
							{buttons}
						</div>
					}
					right={
						<span
							aria-hidden="true"
							className="nf-dev-tailwindcss text-color-pearl inline-flex h-0 items-center text-5xl sm:text-6xl md:text-7xl"
						/>
					}
					className={className}
					idLeft={`navbarLeft-${uid}`}
					idCenter={`navbarCenter-${uid}`}
					idRight={`navbarRight-${uid}`}
				/>
			</div>
		</header>
	);
}
