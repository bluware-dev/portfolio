import React from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

export default function AnimatedOutlet() {
	const location = useLocation();
	const element = useOutlet();

	if (!element) return null;
	// clonar para que react-router/renderers vean el cambio por key (útil para viewTransition pairing)
	return React.cloneElement(element, { key: location.pathname });
}
