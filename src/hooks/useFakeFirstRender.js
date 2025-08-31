import { useEffect, useRef } from 'react';

import { useFirstRender } from '@/context/firstRender';

/**
 * Devuelve un ref booleana que indica si es el primer render lógico tras `isReady`.
 *
 * Permite controlar animaciones introductorias sin repetirlas al navegar entre rutas.
 *
 * @param {boolean} isReady - Indica que fuentes y ventana están completamente cargadas.
 * @returns {React.MutableRefObject<boolean>} Ref que persiste si es primer render tras `isReady`.
 *
 * @example
 * const isFirstRender = useFakedFirstRender(isReady);
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
