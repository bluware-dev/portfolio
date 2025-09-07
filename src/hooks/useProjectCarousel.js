import { useState, useCallback, useEffect } from 'react';

/**
 * useProjectCarousel
 *
 * Hook que maneja la navegación y animaciones de un carrusel de proyectos.
 *
 * @param {Array} items - Lista de proyectos a mostrar.
 * @returns {Object} { index, verbose, verboseAnim, indexAnim, triggerVerbose, triggerIndex }
 */
export default function useProjectCarousel(items) {
	const [index, setIndex] = useState(0);
	const [indexAnim, setIndexAnim] = useState('');
	const [verbose, setVerbose] = useState(false);
	const [verboseAnim, setVerboseAnim] = useState('');

	const triggerVerbose = useCallback(() => {
		setIndexAnim('');
		setVerboseAnim('opacity-0 rotate-x-360 duration-500');
		setTimeout(() => {
			setVerboseAnim('rotate-x-0 opacity-100 duration-500');
			setVerbose((prev) => !prev);
		}, 350);
	}, []);

	const triggerIndex = useCallback(
		(direction) => {
			setVerboseAnim('');
			setIndexAnim(
				direction === 'next'
					? 'rotate-y-180 opacity-0 duration-300'
					: '-rotate-y-180 opacity-0 duration-300'
			);
			setTimeout(() => {
				setIndex((i) =>
					direction === 'next'
						? (i + 1) % items.length
						: (i - 1 + items.length) % items.length
				);
				setIndexAnim('rotate-y-0 opacity-100 duration-300');
			}, 150);
		},
		[items.length]
	);

	useEffect(() => {
		setVerbose(false);
		if (index > items.length - 1) setIndex(0);
	}, [items, index]);

	return {
		index,
		verbose,
		verboseAnim,
		indexAnim,
		triggerVerbose,
		triggerIndex,
	};
}
