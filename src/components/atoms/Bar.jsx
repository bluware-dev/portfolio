/**
 * Bar
 *
 * Contenedor horizontal con tres zonas (left, center, right).
 *
 * @component
 * @param {React.ReactNode} [left]
 * @param {React.ReactNode} [center]
 * @param {React.ReactNode} [right]
 * @param {string} [idLeft]
 * @param {string} [idCenter]
 * @param {string} [idRight]
 * @param {string} [className]
 * @returns {JSX.Element}
 */
export default function Bar({
	left,
	center,
	right,
	idLeft,
	idCenter,
	idRight,
	className,
}) {
	return (
		<div
			className={`bg-dg-1 container mx-auto flex flex-nowrap items-center transition-transform sm:min-w-4/5 md:min-w-3/5 ${className}`}
		>
			<div id={idLeft} className="flex flex-1 flex-row justify-start">
				{left}
			</div>

			<div
				id={idCenter}
				className="relative flex w-fit transform flex-row flex-nowrap justify-center whitespace-nowrap"
			>
				{center}
			</div>

			<div id={idRight} className="flex flex-1 flex-row justify-end">
				{right}
			</div>
		</div>
	);
}
