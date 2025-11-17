/**
 * About
 *
 * Sección "About" usada en HomeIntro.
 *
 * @component
 * @param {boolean} isReady - Flag: fuentes + window.load completado.
 * @param {React.RefObject<boolean>} isFirstRender - Ref que indica primer render lógico.
 * @returns {JSX.Element}
 */
export default function About({ isReady, isFirstRender }) {
	return (
		<p
			style={{ willChange: 'opacity, text-shadow' }}
			className={`text-lg-1 text-shadow-dg-1 font-dark inline-block text-center text-xl not-sm:text-lg sm:mb-6 sm:max-w-[65vw] ${
				isFirstRender.current
					? 'delay-[1500ms] duration-1000'
					: 'delay-[0ms] duration-500'
			} ease-in-out ${
				isReady
					? 'text-shadow-xl -translate-y-2 opacity-100'
					: '-translate-y-5 opacity-0 text-shadow-none'
			}`}
		>
			<span className="text-xl font-bold">
				<span className="text-shadow-accent-blue-dark text-shadow-sm">
					Elian Jofré (Blu)
				</span>
				, desarrollador especializado en arquitectura web, performance y
				sistemas orientados a escalabilidad.
			</span>
			<br />
			<span className="text-shadow-accent-orange-dark font-bigblueterm text-lg font-extralight text-shadow-sm">
				Frontend
			</span>{' '}
			·{' '}
			<span className="text-shadow-accent-purple-dark font-bigblueterm text-lg font-extralight text-shadow-sm">
				Backend
			</span>{' '}
			·{' '}
			<span className="text-shadow-accent-yellow-dark font-bigblueterm text-lg font-extralight text-shadow-sm">
				DevOps
			</span>
		</p>
	);
}
