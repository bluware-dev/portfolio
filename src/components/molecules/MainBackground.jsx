import Background from '@/components/atoms/Background';
import Ghost from '@/components/atoms/Ghost';

/**
 * MainBackground
 *
 * Renderiza el fondo principal del layout.
 * Dependiendo de `isUnresponsive`:
 *  - Pantalla de aviso para dispositivos no compatibles.
 *  - Fondo normal con overlay visual.
 *
 * @component
 * @param {Object} props
 * @param {boolean} props.isUnresponsive - Flag que indica si la pantalla es demasiado pequeña o el contenido se desborda.
 * @param {function} [props.onBypass] - Callback opcional para el click que saltea la advertencia.
 * @returns {JSX.Element}
 */
export default function MainBackground({ isUnresponsive, onBypass }) {
	if (isUnresponsive) {
		return (
			<div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center">
				{/* Fondo no clickable */}
				<Ghost
					layer={-10}
					className="pointer-events-none absolute inset-0 -z-10"
				>
					<Background
						src="/images/wallpaper.png"
						className="h-full w-full object-cover"
					/>
				</Ghost>

				{/* Overlay visual no clickable */}
				<div className="pointer-events-none fixed inset-0 -z-5 backdrop-blur-xs backdrop-brightness-25" />
				<div className="nf-cod-error text-accent-red pointer-events-none fixed -z-10 -translate-y-30 animate-ping text-9xl font-bold" />
				<div
					onClick={onBypass}
					className="animate-rotate-90 nf-fa-mobile_phone text-pearl text-7xl"
				/>

				{/* Mensaje clickeable */}
				<div className="text-pearl text-lg">
					<p className="font-bigblueterm text-accent-red">
						Pantalla no compatible!
						<br />
						<span className="text-accent-blue font-semibold">
							Podés probar:
						</span>
					</p>
					<span className="text-accent-green text-lg font-semibold">
						<br />
						* Usar pantalla completa *
						<br />
						* Rotando el dispositivo *
						<br />
						* Reducir Zoom *
						<br />
						<br />
					</span>
					<div
						className="bg-dg-0 text-accent-purple-bold font-bigblueterm hover:bg-dg-1 container animate-pulse cursor-pointer rounded-lg border p-2 text-lg"
						onClick={onBypass}
					>
						{'[> IGNORAR ADVERTENCIA Y CONTINUAR <]'}
					</div>
				</div>
			</div>
		);
	}

	// Fondo normal
	return (
		<Ghost layer={-10} className="top-0 left-0 h-[100svh] w-full">
			<Background
				className="h-[60svh] w-full sm:h-[70svh] md:h-[85svh]"
				src="/images/wallpaper.png"
			/>
			<div className="mx-auto h-100 w-full bg-gradient-to-b from-[#1D2021] to-20%" />
		</Ghost>
	);
}
