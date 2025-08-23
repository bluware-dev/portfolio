/**
 * Botón reutilizable con estilo por defecto y soporte para override de clases.
 *
 * @component
 * @param {Object} props - Props del componente.
 * @param {() => void} props.onClick - Función ejecutada al hacer click.
 * @param {React.ReactNode} props.children - Contenido del botón.
 * @param {boolean} [props.disabled=false] - Si el botón está deshabilitado.
 * @param {'button'|'submit'|'reset'} [props.type='button'] - Tipo de botón.
 * @param {string} [props.className=''] - Clases adicionales para override.
 * @returns {JSX.Element} Elemento botón estilizado.
 *
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
