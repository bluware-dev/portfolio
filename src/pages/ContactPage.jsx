import { useState, useCallback } from 'react';

import useDelivery from '@/hooks/useDelivery';

import Button from '@/components/atoms/Button';
import InputField from '@/components/atoms/InputField';
import SocialLinks from '@/components/atoms/SocialLinks';
import { SOCIALS } from '@/data/socials';

const ORDERS = [{ key: 'intro', value: true, delay: 150 }];
const LINK_BASE =
	'inline-flex items-center text-5xl md:text-6xl px-1 hover:scale-110 duration-150 ease-in-out';
const BUTTON_BASE = 'h-fit not-sm:text-lg not-sm:px-2 not-sm:py-1 px-4 py-1.5';

/**
 * createMailto
 *
 * Construye la URL mailto con subject y body codificados.
 *
 * @param {Object} param
 * @param {string} param.name
 * @param {string} param.email
 * @param {string} param.message
 * @returns {string} mailto URL
 */
const createMailto = ({ name, email, message }) => {
	const subject = encodeURIComponent(`Contacto desde portfolio: ${name}`);
	const body = encodeURIComponent(
		`Nombre: ${name}\nEmail: ${email}\n\n${message}`
	);
	return `mailto:bluware.contact@gmail.com?subject=${subject}&body=${body}`;
};

/**
 * ContactPage
 *
 * Página de contacto con formulario y enlaces sociales.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function ContactPage() {
	const delivery = useDelivery(ORDERS);
	const [form, setForm] = useState({ name: '', email: '', message: '' });

	const resetForm = useCallback(() => {
		setForm({ name: '', email: '', message: '' });
	}, []);

	const handleChange = useCallback((e) => {
		const { name, value } = e.target;
		setForm((s) => ({ ...s, [name]: value }));
	}, []);

	const handleSubmit = useCallback(
		(e) => {
			e.preventDefault();
			if (!form.name || !form.email || !form.message) return;

			alert(
				'Se intentará abrir tu gestor de correo para proceder con el envío.\n' +
					'\nSi tu navegador bloquea la apertura, podés permitirlo y reintentar o usar los otros medios de contacto.'
			);

			const mailto = createMailto(form);
			window.open(mailto, '_blank');
		},
		[form]
	);

	return (
		<div
			className={`transform transition duration-500 ${delivery['intro'] ? 'opacity-100' : 'opacity-0'}`}
		>
			<div className="bg-dg-1/80 container mx-auto max-w-2xl rounded border p-4 pb-1.5 not-sm:pb-3 drop-shadow-2xl">
				<header className="mb-2 text-center">
					<h1 className="text-lg-2 text-shadow-accent-red-dark font-bigblueterm text-4xl text-shadow-lg">
						Contacto
					</h1>
					<p className="text-lg-2 mt-1 font-semibold text-xl">
						Enviame un email o contactame por mis redes sociales.
					</p>
				</header>

				<form
					onSubmit={handleSubmit}
					className="flex-col text-lg font-semibold"
				>
					<InputField
						name="name"
						label="Nombre"
						value={form.name}
						onChange={handleChange}
					/>

					<InputField
						name="email"
						type="email"
						label="Email"
						value={form.email}
						onChange={handleChange}
					/>

					<InputField
						name="message"
						label="Mensaje"
						value={form.message}
						onChange={handleChange}
						rows={4}
						autoComplete="off"
					/>

					<div className="mt-2 flex justify-between">
						<div className="flex space-x-3 font-normal not-sm:space-x-1">
							<SocialLinks
								socials={SOCIALS}
								className={LINK_BASE}
							/>
						</div>
						<div className="flex gap-4 pt-2 not-sm:gap-2">
							<Button
								type="button"
								onClick={resetForm}
								className={`${BUTTON_BASE} text-dg-2 bg-accent-red hover:bg-accent-red-bold`}
							>
								Limpiar
							</Button>
							<Button
								type="submit"
								className={`${BUTTON_BASE} text-pearl bg-accent-blue-bold hover:bg-accent-blue-dark`}
							>
								Enviar
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
