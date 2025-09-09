import { useState } from 'react';

import ProjectNav from '@/components/molecules/ProjectNav';
import ProjectShowcase from '@/components/organisms/ProjectShowcase';
import { projects } from '@/data/projects';

/**
 * ProjectsCategories
 *
 * Construye el nav de categorías y renderiza el showcase de la categoría activa.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function ProjectsCategories() {
	const categories = Object.entries(projects);

	const defaultCat = categories[1]?.[0] || categories[0]?.[0] || null;

	const [activeCat, setActiveCat] = useState(defaultCat);
	const activeItems = projects[activeCat] || [];

	return (
		<section className="w-full origin-top not-sm:text-xl">
			<ProjectNav
				categories={categories}
				activeCat={activeCat}
				onCategoryChange={setActiveCat}
			/>
			<div className="mt-6">
				<ProjectShowcase items={activeItems} />
			</div>
		</section>
	);
}
