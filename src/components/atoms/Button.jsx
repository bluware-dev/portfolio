/**
 * Button
 *
 * Botón reutilizable y accesible.
 *
 * @component
 * @param {Function} [onClick] - Handler de click.
 * @param {React.ReactNode} children - Contenido del botón.
 * @param {boolean} [disabled=false]
 * @param {'button'|'submit'|'reset'} [type='button']
 * @param {string} [className]
 * @returns {JSX.Element}
 */
export default function Button({
	onClick,
	children,
	disabled = false,
	type = 'button',
	className = '',
}) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			type={type}
			className={`rounded-md text-center transition ${className}`}
		>
			{children}
		</button>
	);
}
