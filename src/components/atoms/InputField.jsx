/**
 * InputField
 *
 * Input controlado o textarea con label.
 *
 * @component
 * @param {string} name
 * @param {string} label
 * @param {string|number} value
 * @param {Function} onChange - (e) => void
 * @param {string} [type='text']
 * @param {number} [rows]
 * @param {string} [className]
 * @returns {JSX.Element}
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
