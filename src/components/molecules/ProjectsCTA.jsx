import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/atoms/Button';

import useIsReady from '@/hooks/useIsReady';
import useFakedFirstRender from '@/hooks/useFakeFirstRender';

import { navigateWithViewTransition } from '@/lib/navigateWithViewTransition';

const BASE_CLASSES =
	'border-accent-blue-bold mx-auto flex w-[70%] rotate-x-0 shadow-sm transform-3d justify-center rounded-md border-2 px-6 py-3 text-[1.5rem] text-[#B3D4FF] transition whitespace-nowrap';

export default function ProjectsCTA() {
	const isReady = useIsReady();
	const isFirstRender = useFakedFirstRender(isReady);
	const navigate = useNavigate();

	const [trigger, setTrigger] = useState(
		'responsive-cta responsive-mt bg-dg-0'
	);
	const [animating, setAnimating] = useState(false);
	const timeoutRef = useRef(null);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = null;
			}
		};
	}, []);

	const handleClick = useCallback(() => {
		if (animating) return;
		setAnimating(true);

		setTrigger(
			'rotate-x-270 scale-90 translate-y-6 font-extrabold bg-dg-1 text-[#E0F0FF] duration-350 delay-[0ms] opacity-25 ease-out'
		);

		timeoutRef.current = setTimeout(() => {
			navigateWithViewTransition(navigate, '/projects');
		}, 350);
	}, [animating, navigate]);

	return (
		<div
			className={`transition duration-750 sm:hidden ${
				isReady ? 'opacity-100' : 'scale-90 rotate-x-270 opacity-0'
			} ${isFirstRender?.current ? 'delay-[3500ms]' : 'delay-[0ms]'}`}
		>
			<Button
				onClick={handleClick}
				disabled={animating}
				aria-disabled={animating}
				style={{ willChange: 'transform, opacity' }}
				className={`${BASE_CLASSES} ${trigger} ${animating ? 'pointer-events-none' : ''}`}
			>
				Ver Proyectos
			</Button>
		</div>
	);
}
