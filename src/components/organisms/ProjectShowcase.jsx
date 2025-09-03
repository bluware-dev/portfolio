import useProjectCarousel from '@/hooks/useProjectCarousel';

import Button from '@/components/atoms/Button';
import ProjectCard from '@/components/molecules/ProjectCard';

const BUTTON_BASE =
	'rounded border px-3 py-1 bg-dg-1/80 hover:bg-dg-0/80 ' +
	'hover:font-semibold active:bg-lg-3 active:text-dg-1 ' +
	'focus:outline-none focus:ring-2 focus:ring-accent-blue ' +
	'transition-colors duration-200 select-none';

const BUTTON_VERBOSE = `${BUTTON_BASE} transform-none duration-500`;

export default function ProjectShowcase({ items = [] }) {
	const {
		index,
		verbose,
		verboseAnim,
		indexAnim,
		triggerVerbose,
		triggerIndex,
	} = useProjectCarousel(items);

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
					className={`bg-dg-0/50 hover:bg-dg-0/80 hover:text-accent-blue h-80 rounded border p-4 font-semibold transition ease-out transform-3d not-sm:h-120 hover:drop-shadow-2xl sm:h-101 ${verboseAnim} ${indexAnim} ${verbose ? 'bg-dg-0/70 text-accent-green-bold' : ''}`}
				>
					{!verbose ? (
						<ProjectCard project={items[index]} />
					) : (
						<p className="text-sm whitespace-pre-line">
							{items[index].verbose || 'Sin datos extra'}
						</p>
					)}
				</div>
			</a>

			{/* Descripcion */}
			<div className="text-shadow-accent-orange-dark text-center text-lg font-semibold text-shadow-lg">
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
