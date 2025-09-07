import Button from '@/components/atoms/Button';

/**
 * ProjectNav
 *
 * Navegador de categorías de proyectos.
 *
 * @component
 * @param {string[]} categories - Array de keys de categorías (ej: ['atomico', 'molecular']).
 * @param {string} activeCat - Key de la categoría activa.
 * @param {(key: string) => void} onCategoryChange - Callback al seleccionar categoría.
 * @returns {JSX.Element|null}
 */
export default function ProjectNav({
	categories,
	activeCat,
	onCategoryChange,
}) {
	if (!categories.length) return null;

	return (
		<nav className="flex justify-center gap-2">
			{categories.map(([key]) => (
				<Button
					key={key}
					onClick={() => onCategoryChange(key)}
					className={`rounded px-2 py-0.75 ${
						key === activeCat
							? 'bg-lg-3/80 text-dg-0 border-2 font-semibold'
							: 'bg-dg-1/80 hover:bg-dg-0/80 border'
					}`}
				>
					{key}
				</Button>
			))}
		</nav>
	);
}
