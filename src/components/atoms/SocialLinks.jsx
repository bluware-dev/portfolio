/**
 * SocialLinks
 *
 * Lista de enlaces a redes con íconos (render inline).
 *
 * @component
 * @param {{ platform: string, url: string, icon: string }[]} socials
 * @param {string} [className]
 * @returns {JSX.Element[]}
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
