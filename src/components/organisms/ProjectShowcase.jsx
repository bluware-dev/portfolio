import { useRef, useState, useEffect } from 'react';

import useProjectCarousel from '@/hooks/useProjectCarousel';

import Button from '@/components/atoms/Button';
import ProjectCard from '@/components/molecules/ProjectCard';

const BUTTON_BASE =
	'rounded border px-3 py-1 bg-dg-1/80 hover:bg-dg-0/80 ' +
	'hover:font-semibold active:bg-lg-3 active:text-dg-1 ' +
	'focus:outline-none focus:ring-2 focus:ring-accent-blue ' +
	'transition-colors duration-200 select-none';

const BUTTON_VERBOSE = `${BUTTON_BASE} transform-none duration-500`;

/**
 * ScrollIndicator
 *
 * Wrapper que añade scroll a su contenido y muestra un indicador
 * de scroll disponible (flecha bouncing) usando nerdfont.
 *
 * @component
 * @param {{children: React.ReactNode}} props
 * @returns {JSX.Element}
 */
function ScrollIndicator({ children }) {
	const scrollRef = useRef(null);
	const [showIndicator, setShowIndicator] = useState(false);

	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;

		const updateIndicator = () => {
			setShowIndicator(
				el.scrollTop + el.clientHeight + 10 < el.scrollHeight
			);
		};

		// check inicial después de render
		const timeout = setTimeout(updateIndicator, 50);

		el.addEventListener('scroll', updateIndicator);
		return () => {
			clearTimeout(timeout);
			el.removeEventListener('scroll', updateIndicator);
		};
	}, [children]); // dependemos del contenido

	return (
		<div className="group relative h-full">
			<div
				ref={scrollRef}
				className="scrollbar-thin scrollbar-thumb-accent-blue scrollbar-track-dg-0/30 h-full overflow-y-auto pr-2"
			>
				{children}
			</div>

			<div
				className={`border-accent-blue-bold text-accent-blue bg-dg-0/85 group-hover:text-accent-orange group-hover:border-accent-orange-bold group-hover:text-shadow-accent-blue text-shadow-xl text-shadow-accent-orange-bold absolute -bottom-2 left-1/2 flex h-10 w-10 -translate-x-1/2 animate-bounce items-center justify-center rounded-full border-3 transition duration-250 ${showIndicator ? 'opacity-75' : 'opacity-0'} not-sm:scale-75 sm:scale-90`}
			>
				<span className="nf-md-chevron_double_down text-4xl" />
			</div>
		</div>
	);
}

/**
 * ProjectShowcase
 *
 * Visor/Carousel de proyectos con controles y modo verbose.
 *
 * @component
 * @param {Array<Object>} items - Array de proyectos.
 * @returns {JSX.Element}
 */
export default function ProjectShowcase({ items = [] }) {
	const {
		index,
		verbose,
		verboseAnim,
		indexAnim,
		triggerVerbose,
		triggerIndex,
	} = useProjectCarousel(items);
	const scrollRef = useRef(null);

	if (!items.length || !items[index]) {
		return (
			<p className="text-center">Todavia no se cargaron proyectos...</p>
		);
	}

	return (
		<div className="relative mx-auto w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
			{/* Proyecto */}
			<a
				href={items[index].url}
				aria-label="Ir al Proyecto"
				target="_blank"
			>
				<div
					className={`bg-dg-0/50 hover:bg-dg-0/80 hover:text-accent-blue h-80 rounded border p-4 font-semibold transition ease-out not-sm:h-120 hover:drop-shadow-2xl sm:h-101 ${verboseAnim} ${indexAnim} ${verbose ? 'bg-dg-0/70 text-accent-orange-bold pr-2' : ''}`}
				>
					{!verbose ? (
						<ProjectCard project={items[index]} />
					) : (
						<ScrollIndicator>
							<p
								ref={scrollRef}
								className="scrollbar-thin scrollbar-thumb-accent-blue scrollbar-track-dg-0/30 max-h overflow-y-auto text-lg whitespace-pre-line"
							>
								{items[index].verbose || 'Sin datos extra'}
							</p>
						</ScrollIndicator>
					)}
				</div>
			</a>

			{/* Descripcion */}
			<div className="text-shadow-accent-orange-dark text-lg-2 text-center text-lg font-semibold text-shadow-lg not-sm:text-xl">
				{items[index].description}
			</div>

			{/* Botones de Navegacion */}
			<div className="mt-2 flex justify-between select-none">
				<Button
					onClick={() => triggerIndex('prev')}
					className={BUTTON_BASE}
				>
					◄
				</Button>

				<Button onClick={triggerVerbose} className={BUTTON_VERBOSE}>
					{!verbose ? 'Ver Más' : 'Ver Menos'}
				</Button>

				<Button
					onClick={() => triggerIndex('next')}
					className={BUTTON_BASE}
				>
					►
				</Button>
			</div>
		</div>
	);
}
