import { useLayoutEffect, useState } from 'react';

export default function useResponsiveScale() {
	const [scale, setScale] = useState(1);

	useLayoutEffect(() => {
		const update = () => {
			const w = window.innerWidth;
			const isLandscape = window.matchMedia(
				'(orientation: landscape)'
			).matches;

			if (!isLandscape) return setScale(1);

			const ratio = Math.max(0.5, Math.min(1, w / 768));
			const bonus = w < 480 ? 0.1 : 0;

			setScale((prev) => {
				const next = Math.max(0.5, Math.min(1, ratio + bonus));
				return prev === next ? prev : next;
			});
		};

		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	}, []);

	return scale;
}
