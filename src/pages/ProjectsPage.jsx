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
 * ProjectsPage
 *
 * Página que muestra proyectos agrupados por categoría.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function ProjectsPage() {
	const delivery = useDelivery(ORDERS);

	return (
		<div
			className={`transform transition duration-500 ${delivery['intro'] ? 'opacity-100' : 'opacity-0'}`}
		>
			<header className="mb-4 text-center">
				<h1 className="text-lg-2 text-shadow-accent-blue-dark font-bigblueterm mb-1 text-4xl text-shadow-lg">
					Mis Proyectos
				</h1>
				<p className="text-lg-1 font-semibold not-sm:text-xl">
					Explora mis proyectos organizados por categorías
				</p>
			</header>

			<ProjectCategories />
		</div>
	);
}
