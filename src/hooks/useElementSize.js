import { useState, useEffect } from 'react';

/**
 * useElementSize
 *
 * Hook que observa el tamaño de un elemento y el tamaño de la ventana.
 *
 * @param {React.RefObject<HTMLElement>} elementRef - Ref del elemento a medir.
 * @returns {{
 *   size: { width: number, height: number },
 *   windowSize: { width: number, height: number }
 * }}
 */
export default function useElementSize(elementRef) {
	const [size, setSize] = useState({ width: 0, height: 0 });
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		if (!elementRef?.current) return;

		const update = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
			if (!elementRef?.current) return;
			const rect = elementRef.current.getBoundingClientRect();
			setSize({ width: rect.width, height: rect.height });
		};

		// Observador del elemento
		const observer = new ResizeObserver(update);
		observer.observe(elementRef.current);

		// Event listener de la ventana
		window.addEventListener('resize', update);

		// Inicializa
		update();

		return () => {
			observer.disconnect();
			window.removeEventListener('resize', update);
		};
	}, [elementRef]);

	return { size, windowSize };
}
