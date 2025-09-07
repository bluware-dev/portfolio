import React from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

/**
 * AnimatedOutlet
 *
 * Clona el outlet añadiendo key basada en la ruta para forzar remount y facilitar view transitions.
 *
 * @returns {JSX.Element|null}
 */
export default function AnimatedOutlet() {
	const location = useLocation();
	const element = useOutlet();

	if (!element) return null;
	// clonar para que react-router/renderers vean el cambio por key (útil para viewTransition pairing)
	return React.cloneElement(element, { key: location.pathname });
}
