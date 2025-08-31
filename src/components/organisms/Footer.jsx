import React, { useMemo, useId, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Bar from '@/components/atoms/Bar';
import { navigateWithViewTransition } from '@/lib/navigateWithViewTransition';

/**
 * Footer
 *
 * Reutilizable y consistente con Navbar. Muestra repositorio, licencia y redes.
 *
 * @param {Object} props
 * @param {string} props.pathname - Ruta actual, usada para resaltar botones activos.
 * @param {Object} props.pathStyle - Estilos dinámicos aplicados al contenedor para animaciones (transform, delays, etc.).
 * @param {number} props.scale - Factor de escala aplicado al Navbar según viewport.
 * @param {boolean} props.isReady - Indica si la app y fuentes están listas; activa animaciones de entrada.
 * @param {string} [props.className] - Clases CSS opcionales adicionales para el contenedor.
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

	const linkBase =
		'inline-flex items-center text-3xl md:text-4xl px-1 hover:scale-110 duration-150 ease-in-out';

	return (
		<footer
			style={transformStyle}
			className="fixed bottom-0 z-30 w-full"
			aria-hidden="false"
		>
			<div
				className={`rotatable ${isReady ? 'rotatable-end' : ''}`}
				style={pathStyle}
			>
				<Bar
					left={
						<>
							{/* Mobile / portrait */}
							<a
								href="https://github.com/bluware-dev/portfolio"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center space-x-1 px-2 text-[0.9rem] underline hover:font-bold sm:hidden"
							>
								<span
									aria-hidden="true"
									className="nf-cod-file_code text-lg"
								/>
								<span>Source</span>
							</a>

							{/* Desktop */}
							<a
								href="https://github.com/bluware-dev/portfolio"
								target="_blank"
								rel="noopener noreferrer"
								className="hidden items-center space-x-1 px-2 text-[0.9rem] underline hover:font-bold sm:inline-flex sm:text-[1rem]"
							>
								<span
									aria-hidden="true"
									className="nf-cod-file_code text-lg sm:text-xl"
								/>
								<span>Source Code</span>
							</a>
						</>
					}
					center={
						<a
							href="https://github.com/bluware-dev/portfolio/blob/main/LICENSE"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 text-[1rem] hover:font-bold sm:text-[1.15rem]"
						>
							MIT © 2025 bluware-dev
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
								className={linkBase}
							>
								<span className="nf-md-contacts inline-flex items-center sm:hidden" />
							</a>

							{/* Desktop: todas las redes */}
							<div className="hidden space-x-3 sm:flex">
								<a
									href="https://github.com/bluware-dev"
									aria-label="GitHub"
									target="_blank"
									rel="noopener noreferrer"
									className={linkBase}
								>
									<span className="nf-fa-github" />
								</a>
								<a
									href="https://www.instagram.com/bluware.dev/"
									aria-label="Instagram"
									target="_blank"
									rel="noopener noreferrer"
									className={linkBase}
								>
									<span className="nf-fa-instagram" />
								</a>
								<a
									href="https://www.linkedin.com/in/bluware/"
									aria-label="LinkedIn"
									target="_blank"
									rel="noopener noreferrer"
									className={linkBase}
								>
									<span className="nf-dev-linkedin" />
								</a>
								<a
									href="https://discord.com/users/1345014903890776128"
									aria-label="Discord"
									target="_blank"
									rel="noopener noreferrer"
									className={linkBase}
								>
									<span className="nf-fa-discord" />
								</a>
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
