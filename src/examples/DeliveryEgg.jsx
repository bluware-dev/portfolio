import useDelivery from '@/hooks/useDelivery';

const ORDERS = [
	{
		key: 'testing-jsx',
		value: (
			<div className="text-3xl">
				<p>Este texto aparece despues de 2 segundos,</p>
				<br />
				<p>Empieza a saltar despues de 4 segundos.</p>
			</div>
		),
		delay: 2000,
	},
	{
		key: 'testing-tailwind',
		value: 'animate-bounce',
		delay: 4000,
	},
];

export default function DeliveryEgg() {
	const delivery = useDelivery(ORDERS);

	return (
		// NOTA: Usar `delivery['clave']` de forma directa se considera valido.
		// Si la orden aún no se entregó, el valor de la clave es `undefined` <- falsy.
		<div className="mt-[25vh] h-fit items-center text-center">
			<p className="p-10 text-6xl">Testing Data Deliver</p>
			<div className={delivery['testing-tailwind']}>
				{delivery['testing-jsx']}
			</div>
		</div>
	);
}
