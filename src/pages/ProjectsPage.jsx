import useDelivery from '@/hooks/useDelivery';

import ProjectCategories from '@/components/organisms/ProjectsCategories';

const ORDERS = [
	{
		key: 'intro',
		value: true,
		delay: 150,
	},
];

/**
 * Componente de página para mostrar proyectos organizados por categorías
 *
 * @component
 * @returns {JSX.Element} Layout de página con showcase de proyectos
 */
export default function ProjectsPage() {
	const delivery = useDelivery(ORDERS);

	return (
		<main
			className={`responsive-pt min-h-screen transform transition duration-500 sm:scale-100 md:scale-110 ${delivery['intro'] ? 'opacity-100' : 'opacity-0'}`}
		>
			<div className="container mx-auto px-4 py-8">
				<header className="mb-4 text-center">
					<h1 className="text-lg-2 text-shadow-accent-blue-dark font-bigblueterm mb-1 text-4xl text-shadow-lg">
						Mis Proyectos
					</h1>
					<p className="text-lg-1 font-semibold">
						Explora mis proyectos organizados por categorías
					</p>
				</header>

				<ProjectCategories />
			</div>
		</main>
	);
}
