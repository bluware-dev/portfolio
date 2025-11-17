import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

import LayoutPage from '@/components/templates/LayoutPage';

import useIsReady from '@/hooks/useIsReady';

import { FirstRenderProvider } from '@/context/FirstRenderProvider';

import ContactPage from '@/pages/ContactPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import ProjectsPage from '@/pages/ProjectsPage';

/**
 * App
 *
 * Punto de entrada que monta el router y el layout principal.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function App() {
	const isReady = useIsReady();

	return (
		<>
			<HelmetProvider>
				<FirstRenderProvider>
					<Routes>
						<Route
							path="/"
							element={<LayoutPage isReady={isReady} />}
						>
							<Route index element={<HomePage />} />
							<Route
								path="/about"
								element={isReady && <HomePage />}
							/>
							<Route
								path="/projects"
								element={isReady && <ProjectsPage />}
							/>
							<Route
								path="/contact"
								element={isReady && <ContactPage />}
							/>
						</Route>
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</FirstRenderProvider>
			</HelmetProvider>
		</>
	);
}
