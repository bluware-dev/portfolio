/**
 * Componente atómico de barra horizontal con tres secciones: izquierda, centro y derecha.
 *
 * Se usa como base para estructuras como Navbar, Footer o Toolbars. No contiene lógica ni estados.
 * Permite pasar `id` opcionales a cada sección para evitar colisiones y facilitar referencias.
 *
 * @component
 * @param {Object} props - Props del componente.
 * @param {React.ReactNode} [props.left] - Elemento(s) alineados a la izquierda.
 * @param {React.ReactNode} [props.center] - Elemento(s) centrados horizontalmente.
 * @param {React.ReactNode} [props.right] - Elemento(s) alineados a la derecha.
 * @param {string} [props.className] - Clases TailwindCSS adicionales para el contenedor.
 * @param {string|null} [props.idLeft=null] - ID opcional para la sección izquierda.
 * @param {string|null} [props.idCenter=null] - ID opcional para la sección central.
 * @param {string|null} [props.idRight=null] - ID opcional para la sección derecha.
 * @returns {JSX.Element} Barra horizontal visual con secciones configurables.
 */
export default function Bar({
	left = <></>,
	center = <></>,
	right = <></>,
	className = '',
	idLeft = null,
	idCenter = null,
	idRight = null,
}) {
	return (
		<div
			className={`bg-dg-1 relative container mx-auto flex flex-nowrap items-center rounded-b-lg transition-transform sm:min-w-4/5 sm:rounded-lg md:min-w-3/5 ${className}`}
		>
			<div
				id={idLeft ?? undefined}
				className="flex flex-1 flex-row justify-start"
			>
				{left}
			</div>

			<div
				id={idCenter ?? undefined}
				className="relative flex w-fit transform flex-row flex-nowrap justify-center whitespace-nowrap"
			>
				{center}
			</div>

			<div
				id={idRight ?? undefined}
				className="flex flex-1 flex-row justify-end"
			>
				{right}
			</div>
		</div>
	);
}
