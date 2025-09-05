/**
 * SocialLinks
 *
 * Componente atómico que renderiza enlaces a redes sociales con íconos.
 *
 * @param {Object} props
 * @param {{ platform: string, url: string, icon: string }[]} props.socials - Array de redes con plataforma, URL e ícono CSS.
 * @param {string} [props.className] - Clases CSS aplicadas a cada enlace.
 * @returns {JSX.Element[]} Lista de enlaces de redes sociales.
 */
export default function SocialLinks({ socials, className }) {
	return (
		<>
			{socials.map((s) => (
				<a
					key={s.platform}
					href={s.url}
					aria-label={s.platform}
					target="_blank"
					rel="noopener noreferrer"
					className={className}
				>
					<span className={s.icon} />
				</a>
			))}
		</>
	);
}
