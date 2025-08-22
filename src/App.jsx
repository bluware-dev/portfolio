import { Routes, Route } from 'react-router-dom';

import LayoutPage from '@/components/templates/LayoutPage';

import HomePage from '@/pages/HomePage';
import ProjectsPage from '@/pages/ProjectsPage';
import ContactPage from '@/pages/ContactPage';

import { FirstRenderProvider } from '@/context/FirstRenderContext';
import useIsReady from '@/hooks/useIsReady';

/**
 * Enrutado basico de paginas en base a LayoutPage
 */
export default function App() {
	const isReady = useIsReady();

	return (
		<>
			<FirstRenderProvider>
				<Routes>
					<Route path="/" element={<LayoutPage isReady={isReady} />}>
						<Route index element={<HomePage />} />
						<Route
							path="/projects"
							element={<ProjectsPage isReady={isReady} />}
						/>
						<Route
							path="/contact"
							element={<ContactPage isReady={isReady} />}
						/>
					</Route>
				</Routes>
			</FirstRenderProvider>
		</>
	);
}
