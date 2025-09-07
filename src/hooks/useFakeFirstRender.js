import { useEffect, useRef } from 'react';

import { useFirstRender } from '@/context/firstRender';

/**
 * useFakeFirstRender
 *
 * Hook que devuelve un ref booleana que indica si es el primer render lógico.
 * Útil para animaciones introductorias que no deben repetirse al navegar.
 *
 * @param {boolean} isReady - Flag: fuentes + window.load completado.
 * @returns {React.RefObject<boolean>} Ref que indica si es primer render.
 *
 * @example
 * const isFirstRender = useFakeFirstRender(isReady);
 * if (isFirstRender.current) triggerFirstAnimation();
 */
export default function useFakedFirstRender(isReady) {
	const fakeRenderRecord = useFirstRender().current;
	const isFirstRender = useRef(fakeRenderRecord);

	useEffect(() => {
		if (isReady) isFirstRender.current = fakeRenderRecord;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isReady]);

	return isFirstRender;
}
