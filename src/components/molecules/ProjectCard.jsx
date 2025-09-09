import Image from '@/components/atoms/Image';

/**
 * ProjectCard
 *
 * Tarjeta que muestra un proyecto (imagen, título, descripción).
 *
 * @component
 * @param {Object} project
 * @param {string} project.id
 * @param {string} project.title
 * @param {string} [project.description]
 * @param {string} [project.verbose]
 * @param {string} [project.url]
 * @param {string} [project.image]
 * @returns {JSX.Element}
 */
export default function ProjectCard({ project }) {
	if (!project) return null;

	return (
		<div className="mb-1 flex-col items-center">
			<div className="relative h-70 w-full not-sm:h-109 sm:h-90">
				{project.image ? (
					<Image
						src={project.image}
						alt={project.title}
						className="absolute inset-0 h-full w-full rounded-lg object-cover shadow-lg"
						fallback="nf-dev-react text-accent-red-dark text-8xl font-normal flex pt-10 flex scale-200 origin-top items-center justify-center"
					/>
				) : (
					<div className="bg-dg-0/50 flex h-full items-center justify-center rounded-lg text-4xl">
						No Image
					</div>
				)}
			</div>
			<h3 className="text-shadow-xl text-shadow-accent-blue-bold/50 text-center text-xl font-semibold">
				{project.title}
			</h3>
		</div>
	);
}
