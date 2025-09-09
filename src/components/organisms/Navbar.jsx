import React, { useCallback, useId, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Bar from '@/components/atoms/Bar';
import Button from '@/components/atoms/Button';
import { navigateWithViewTransition } from '@/lib/navigateWithViewTransition';

/**
 * Navbar
 *
 * Barra de navegación con estados/anims controlados externamente.
 *
 * @component
 * @param {string} pathname
 * @param {Object} pathStyle
 * @param {boolean} isReady - Flag: fuentes + window.load completado.
 * @param {string} [className]
 * @returns {JSX.Element}
 */
export default function Navbar({
	pathname,
	pathStyle,
	isReady,
	className = '',
}) {
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
		<header className="relative top-0 z-30 w-full" aria-hidden="false">
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
