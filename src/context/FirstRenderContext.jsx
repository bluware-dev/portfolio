import { useEffect, useRef } from 'react';

import { FirstRenderContext } from './firstRender.js';

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
