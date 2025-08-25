import { useEffect, useState } from 'react';

/**
 * Espera a que carguen fuentes + evento load de la ventana.
 * Loguea error si fonts fallan, arranca igual.
 * @returns {boolean} - true cuando todo está listo.
 */
export default function useIsReady() {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		let mounted = true;

		const waitFonts = document.fonts?.ready ?? Promise.resolve();
		const waitLoad = new Promise((res) => {
			if (document.readyState === 'complete') res();
			else window.addEventListener('load', res, { once: true });
		});

		Promise.all([waitFonts, waitLoad])
			.then(() => {
				if (mounted) setReady(true);
			})
			.catch((err) => {
				console.error(`[useIsReady]: fuentes no cargaron →`, err);
				if (mounted) setReady(true);
			});

		return () => {
			mounted = false;
		};
	}, []);

	return ready;
}
