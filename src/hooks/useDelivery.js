import { useEffect, useMemo, useRef, useState } from 'react';

import useFakedFirstRender from './useFakeFirstRender';
import useIsReady from './useIsReady';

/**
 * Hook para delivery incremental de datos con timeouts controlados.
 *
 * Maneja entregas asíncronas evitando memory leaks y renders redundantes.
 * Una vez completado, se vuelve inerte para optimizar re-renders.
 *
 * @param {Array<{key: string, value: any, delay?: number}>} orders - Órdenes de entrega
 * @param {string} orders[].key - Identificador único de la orden
 * @param {any} orders[].value - Valor a entregar (cualquier tipo serializable)
 * @param {number} [orders[].delay=0] - Delay en ms antes de la entrega
 * @returns {Record<string, any>} Objeto con deliveries completados
 */
export default function useDelivery(orders) {
	const isReady = useIsReady();
	const isFirstRender = useFakedFirstRender(isReady);

	const [delivery, setDelivery] = useState({});
	const timeoutsRef = useRef(new Set());
	const processedRef = useRef(null);

	// Serialización para comparación shallow de orders
	const ordersHash = orders.map((o) => `${o.key}:${o.delay}`).join('|');
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const stableOrders = useMemo(() => orders, [ordersHash]);

	const isCompleted = Object.keys(delivery).length === stableOrders.length;

	useEffect(() => {
		if (
			!isReady ||
			!isFirstRender ||
			isCompleted ||
			processedRef.current === stableOrders
		) {
			return;
		}

		processedRef.current = stableOrders;

		// Capturar ref para cleanup seguro
		const currentTimeouts = timeoutsRef.current;

		// Limpiar timeouts previos
		currentTimeouts.forEach(clearTimeout);
		currentTimeouts.clear();

		// Procesar órdenes
		stableOrders.forEach(({ key, value, delay = 0 }) => {
			const timeoutId = setTimeout(() => {
				setDelivery((prev) => ({ ...prev, [key]: value }));
				currentTimeouts.delete(timeoutId);
			}, delay);

			currentTimeouts.add(timeoutId);
		});

		return () => {
			currentTimeouts.forEach(clearTimeout);
			currentTimeouts.clear();
		};
	}, [isReady, isFirstRender, stableOrders, isCompleted]);

	return delivery;
}
