import { useEffect, useRef } from 'react';

import { FirstRenderContext } from '@/context/firstRender';

/**
 * FirstRenderProvider
 *
 * Provider que inicializa y expone `isFirstRender` (Ref boolean).
 *
 * @param {React.ReactNode} children
 * @returns {JSX.Element}
 */
export const FirstRenderProvider = ({ children }) => {
	const isFirstRender = useRef(true);

	useEffect(() => {
		isFirstRender.current = false;
	}, []);

	return (
		<FirstRenderContext.Provider value={isFirstRender}>
			{children}
		</FirstRenderContext.Provider>
	);
};
