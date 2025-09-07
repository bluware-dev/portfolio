import React, { useMemo, useId, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import SocialLinks from '../atoms/SocialLinks';

import Bar from '@/components/atoms/Bar';
import { SOCIALS } from '@/data/socials';
import { navigateWithViewTransition } from '@/lib/navigateWithViewTransition';

const LINK_BASE =
	'inline-flex items-center text-3xl md:text-4xl px-1 hover:scale-110 duration-150 ease-in-out';

/**
 * Footer
 *
 * Pie reutilizable con enlaces y metadatos.
 *
 * @component
 * @param {string} pathname
 * @param {Object} pathStyle
 * @param {number} scale
 * @param {boolean} isReady - Flag: fuentes + window.load completado.
 * @param {string} [className]
 * @returns {JSX.Element}
 */
export default function Footer({
	pathname,
	pathStyle,
	scale,
	isReady,
	className = '',
}) {
	const transformStyle = useMemo(
		() => ({
			transform: `scale(${Number(scale)})`,
			transformOrigin: 'bottom center',
			willChange: 'transform',
		}),
		[scale]
	);
	const navigate = useNavigate();

	const handleNav = useCallback(
		(to) => () => navigateWithViewTransition(navigate, to),
		[navigate]
	);

	const uid = useId();

	return (
		<footer style={transformStyle} className="fixed bottom-0 z-30 w-full">
			<div
				className={`rotatable ${isReady ? 'rotatable-end' : ''}`}
				style={pathStyle}
			>
				<Bar
					left={
						<a
							href="https://github.com/bluware-dev/portfolio"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center space-x-1 px-2 text-[0.9rem] underline hover:font-bold"
						>
							<span
								aria-hidden="true"
								className="nf-cod-file_code text-lg sm:text-xl"
							/>
							<span className="sm:hidden">Source</span>
							<span className="hidden text-lg sm:inline">
								Source Code
							</span>
						</a>
					}
					center={
						<a
							href="https://github.com/bluware-dev/portfolio/blob/main/LICENSE"
							target="_blank"
							rel="noopener noreferrer"
							className="group p-2 text-lg not-sm:text-sm hover:font-bold"
						>
							<span className="group-hover:text-shadow-accent-red-dark text-accent-red text-shadow-lg">
								BSD
							</span>{' '}
							<span className="inline not-sm:hidden">
								3-Clause © 2025 Elian Jofré
							</span>{' '}
							<span className="inline not-md:hidden">
								(bluware-dev)
							</span>
							<span className="inline sm:hidden">
								© 2025 Elian Jofré
							</span>
						</a>
					}
					right={
						<>
							{/* Mobile / portrait: redirige a /contact */}
							<a
								onClick={
									pathname !== '/contact'
										? handleNav('/contact')
										: undefined
								}
								aria-label="Contact Me"
								rel="noopener noreferrer"
								className={LINK_BASE}
							>
								<span className="nf-md-contacts inline-flex items-center sm:hidden" />
							</a>

							{/* Desktop: todas las redes */}
							<div className="space-x-3 font-normal not-sm:hidden">
								<SocialLinks
									socials={SOCIALS}
									className={`${LINK_BASE}`}
								/>
							</div>
						</>
					}
					className={className}
					idLeft={`footerLeft-${uid}`}
					idCenter={`footerCenter-${uid}`}
					idRight={`footerRight-${uid}`}
				/>
			</div>
		</footer>
	);
}
