/**
 * InputField
 *
 * Componente atómico de input o textarea con label.
 *
 * @param {Object} props
 * @param {string} props.label - Texto del label que acompaña al input.
 * @param {string} props.name - Nombre del input para manejar el estado.
 * @param {string|number} props.value - Valor controlado del input.
 * @param {(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void} props.onChange - Función para actualizar el estado.
 * @param {string} [props.type='text'] - Tipo de input (solo aplica si no es textarea).
 * @param {number} [props.rows] - Número de filas si se renderiza un textarea.
 * @param {string} [props.className] - Clases adicionales para personalizar el input.
 * @returns {JSX.Element} Input o Textarea con label.
 */
export default function InputField({
	label,
	name,
	value,
	onChange,
	type = 'text',
	rows,
	className,
}) {
	return (
		<label className="flex flex-col">
			<span className="text-lg-1 mb-1">{label}</span>
			{rows ? (
				<textarea
					name={name}
					value={value}
					onChange={onChange}
					rows={rows}
					required
					className={`focus:ring-accent-blue resize-vertical rounded-md border border-[rgba(255,255,255,0.04)] bg-transparent px-3 py-2 outline-none focus:ring-2 ${className}`}
				/>
			) : (
				<input
					name={name}
					type={type}
					value={value}
					onChange={onChange}
					required
					spellCheck={false}
					className={`rounded-md border border-[rgba(255,255,255,0.04)] bg-transparent px-3 py-2 outline-none not-sm:py-1 ${className}`}
				/>
			)}
		</label>
	);
}
