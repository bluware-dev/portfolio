import useDelivery from '@/hooks/useDelivery';
import useFakedFirstRender from '@/hooks/useFakeFirstRender';
import useIsReady from '@/hooks/useIsReady';

import About from '@/components/organisms/About';

const ORDERS = [
	{
		key: 'animate-title',
		value: 'sm:animate-pulse',
		delay: 3500,
	},
];

/**
 * HomeIntro
 *
 * Intro animado de la home (usa hooks locales).
 *
 * @component
 * @returns {JSX.Element}
 */
export default function HomeIntro() {
	const isReady = useIsReady();
	const isFirstRender = useFakedFirstRender(isReady);

	const delivery = useDelivery(ORDERS);

	return (
		<div className="text-center transition">
			<div
				style={{ willChange: 'transform' }}
				className={`font-bigblueterm ${
					isFirstRender.current ? 'delay-[250ms] duration-1250' : ''
				} ease-in-out ${isReady ? 'translate-y-5' : '-translate-y-200'}`}
			>
				{/* Title Bounce */}
				<div
					style={{ willChange: 'transform' }}
					className={`${
						isFirstRender.current
							? 'delay-[1250ms] duration-750'
							: 'delay-[0ms] duration-500'
					} ease-in-out ${
						isReady
							? '-translate-y-5 not-sm:opacity-100'
							: 'not-sm:opacity-0'
					}`}
				>
					<h1 className="flex justify-center text-6xl transition-transform">
						{/* Glow de fondo */}
						<span
							style={{ willChange: 'opacity' }}
							className={`text-accent-purple-bold pointer-events-none absolute -z-10 blur-xl select-none ${
								isFirstRender.current
									? 'delay-[1500ms] duration-1000 sm:delay-[3000ms]'
									: 'delay-[150ms] duration-1000'
							} ${isReady ? 'opacity-65' : 'opacity-0'} `}
						>
							<span className={delivery['animate-title']}>
								{'█'.repeat('Blu    Web'.length)}
							</span>
						</span>

						{/* Texto principal */}
						<span className="ml-2 inline-flex items-center select-none">
							<span className="to-accent-blue-dark bg-gradient-to-b from-blue-400 bg-clip-text font-bold text-transparent">
								Blu
							</span>

							<span className="from-accent-red to-accent-red-dark mr-3 ml-2 flex items-center bg-gradient-to-b bg-clip-text text-transparent">
								{'</>'}
							</span>

							<span className="from-lg-3 to-lg-0 bg-gradient-to-b bg-clip-text font-bold text-transparent">
								Web
							</span>
						</span>
					</h1>
				</div>
			</div>
			<br />
			{/* "Portfolio" Rotate */}
			<div
				style={{ willChange: 'transform' }}
				className={`h-5 text-3xl ${
					isFirstRender.current
						? 'delay-[1500ms] duration-250'
						: 'delay-[100ms] duration-250'
				} ease-in-out ${
					isReady
						? '-translate-y-8 rotate-x-0'
						: '-translate-y-9 rotate-x-90'
				}`}
			>
				{/* "Portfolio" Deploy */}
				<h2
					style={{ willChange: 'transform, text-shadow' }}
					className={`${
						isFirstRender.current
							? 'delay-[1500ms] duration-750'
							: 'delay-[150ms] duration-500'
					} ease-out ${
						isReady
							? 'text-shadow-accent-orange-dark text-shadow-xl -translate-y-0'
							: 'translate-y-2 text-shadow-none'
					}`}
				>
					Portfolio
				</h2>
			</div>
			<About isReady={isReady} isFirstRender={isFirstRender} />
		</div>
	);
}
