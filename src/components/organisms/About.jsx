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
	const textMakeup =
		'text-shadow-sm font-extralight font-bigblueterm text-lg sm:text-lg';

	return (
		<div>
			<p
				style={{ willChange: 'opacity, text-shadow' }}
				className={`text-lg-1 text-shadow-dg-1 font-dark mb-4 inline-block text-center text-xl not-sm:text-lg sm:mb-6 sm:max-w-[65vw] ${
					isFirstRender.current
						? 'delay-[1500ms] duration-1000'
						: 'delay-[0ms] duration-500'
				} ease-in-out ${
					isReady
						? 'text-shadow-xl -translate-y-2 opacity-100'
						: '-translate-y-5 opacity-0 text-shadow-none'
				}`}
			>
				<span className="text-xl font-bold">Soy </span>
				<span className={`${textMakeup} text-shadow-accent-blue-dark`}>
					Elian Jofré
				</span>
				<br />
				<span
					className={`${textMakeup} text-shadow-accent-orange-dark`}
				>
					Software Developer
				</span>{' '}
				·{' '}
				<span
					className={`${textMakeup} text-shadow-accent-purple-dark`}
				>
					Linux & Virtualization
				</span>{' '}
				·{' '}
				<span
					className={`${textMakeup} text-shadow-accent-orange-dark`}
				>
					Backend & Frontend
				</span>{' '}
				·{' '}
				<span
					className={`${textMakeup} text-shadow-accent-orange-dark`}
				>
					UI/UX Designer
				</span>{' '}
				·{' '}
				<span
					className={`${textMakeup} text-shadow-accent-yellow-dark`}
				>
					Sysadmin & DevOps
				</span>{' '}
				·{' '}
				<span className={`${textMakeup} text-shadow-accent-blue-dark`}>
					Data Analyst
				</span>{' '}
				·{' '}
				<span className={`${textMakeup} text-shadow-accent-green-dark`}>
					Scripting Expert
				</span>{' '}
				·{' '}
				<span className={`${textMakeup} text-shadow-accent-teal-dark`}>
					FOSS Advocate
				</span>{' '}
				·{' '}
				<span
					className={`${textMakeup} text-shadow-accent-purple-dark`}
				>
					Embedded Enthusiast
				</span>{' '}
				·{' '}
				<span
					className={`${textMakeup} text-shadow-accent-purple-dark`}
				>
					Unix Philosopher
				</span>
			</p>
		</div>
	);
}
