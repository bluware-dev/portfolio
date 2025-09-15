import { useEffect } from 'react';

import useDelivery from '@/hooks/useDelivery';

import Overlay from '@/components/atoms/Overlay';
import MainBackground from '@/components/molecules/MainBackground';

const REDIRECT_DELAY = 3000;
const ORDERS = [
	{
		key: 'intro',
		value: true,
		delay: 150,
	},
];

/**
 * NotFoundPage
 *
 * Página de error 404. Muestra mensaje y redirige a Home tras 3s
 * con redirección completa para reiniciar la animación one-shot.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function NotFoundPage() {
	const delivery = useDelivery(ORDERS);

	useEffect(() => {
		const timer = setTimeout(() => {
			window.location.href = '/';
		}, REDIRECT_DELAY);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className={`grid h-[75svh] transform place-items-center transition duration-500 ${
				delivery['intro'] ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<Overlay />
			<MainBackground />

			<header className="mb-4 text-center">
				<h1 className="font-bigblueterm text-accent-red-bold mb-1 text-2xl text-shadow-lg sm:text-4xl">
					Página no encontrada
				</h1>
				<p className="text-lg-1 text-xl font-semibold">
					Redirigiendo a inicio en 3 segundos…
				</p>
				<a href="/" className="text-accent-red-bold text-lg underline">
					Click si no redirige!
				</a>
			</header>
		</div>
	);
}
