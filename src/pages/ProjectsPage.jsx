import CategoriesShowcase from '@/components/organisms/CategoriesShowcase';

/**
 * Componente de página para mostrar proyectos organizados por categorías
 *
 * @component
 * @returns {JSX.Element} Layout de página con showcase de proyectos
 */
export default function ProjectsPage() {
	return (
		<main className="responsive-pt min-h-screen">
			<div className="container mx-auto px-4 py-8">
				<header className="mb-8 text-center">
					<h1 className="text-lg-3 mb-2 text-3xl font-bold">
						Proyectos
					</h1>
					<p className="text-lg-1">
						Explora mis trabajos organizados por categorías
					</p>
				</header>

				<CategoriesShowcase />
			</div>
		</main>
	);
}
