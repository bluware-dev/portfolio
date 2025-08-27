/**
 * @param {Object} props
 * @param {boolean} props.isReady - `true` si fuentes + ventana están cargadas.
 * @param {React.RefObject<boolean>} props.isFirstRender -  Ref que indica si es el primer render lógico.
 * @returns {JSX.Element}
 */
export default function About({ isReady, isFirstRender }) {
	const textMakeup =
		'text-shadow-sm font-extralight font-bigblueterm text-[.75em]';

	return (
		<div>
			<p
				style={{ willChange: 'opacity, text-shadow' }}
				className={`text-lg-1 text-shadow-dg-1 mb-4 inline-block text-center text-lg text-[1.2em] font-bold not-sm:text-[1.1em] sm:mb-6 sm:max-w-[65vw] ${
					isFirstRender.current
						? 'delay-[1500ms] duration-1000'
						: 'delay-[0ms] duration-500'
				} ease-in-out ${
					isReady
						? 'text-shadow-xl -translate-y-2 opacity-100'
						: '-translate-y-5 opacity-0 text-shadow-none'
				}`}
			>
				{' '}
				Mi nombre es{' '}
				<span className={`${textMakeup} text-shadow-accent-blue-dark`}>
					Elian
				</span>
				<br />
				<span
					className={`${textMakeup} text-shadow-accent-orange-bold`}
				>
					Fullstack Developer
				</span>{' '}
				·{' '}
				<span
					className={`${textMakeup} text-shadow-accent-purple-bold`}
				>
					Linux Poweruser
				</span>{' '}
				·{' '}
				<span className={`${textMakeup} text-shadow-accent-green-bold`}>
					Backend Architect
				</span>{' '}
				·{' '}
				<span
					className={`${textMakeup} text-shadow-accent-orange-bold`}
				>
					UI/UX Designer
				</span>{' '}
				·{' '}
				<span
					className={`${textMakeup} text-shadow-accent-yellow-bold`}
				>
					Sysadmin
				</span>{' '}
				·{' '}
				<span className={`${textMakeup} text-shadow-accent-blue-bold`}>
					Data Analyst
				</span>{' '}
				·{' '}
				<span className={`${textMakeup} text-shadow-accent-green-bold`}>
					Scripting Expert
				</span>{' '}
				·{' '}
				<span className={`${textMakeup} text-shadow-accent-teal-bold`}>
					FOSS Advocate
				</span>{' '}
				·{' '}
				<span
					className={`${textMakeup} text-shadow-accent-purple-bold`}
				>
					Embedded Enthusiast
				</span>{' '}
				·{' '}
				<span
					className={`${textMakeup} text-shadow-accent-purple-bold`}
				>
					Unix Philosopher
				</span>
			</p>
		</div>
	);
}
