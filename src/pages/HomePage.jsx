import { Helmet } from 'react-helmet-async';

import ProjectsCTA from '@/components/molecules/ProjectsCTA';
import HomeIntro from '@/components/organisms/HomeIntro';
import TechShowcase from '@/components/organisms/TechShowcase';

/**
 * HomePage
 *
 * Página principal que monta HomeIntro, TechShowcase y ProjectsCTA.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function HomePage() {
	return (
		<div id="home">
			<Helmet>
				<title>Elian Jofre (Blu) | Full-Stack Software Developer</title>
				<meta
					name="description"
					content="Portfolio de Elian Jofre (Blu), desarrollador de software enfocado en web apps rápidas y escalables. Experiencia en React, Astro, Node.js y Python."
				/>
				<link rel="canonical" href="https://bluware.vercel.app" />
			</Helmet>

			<HomeIntro />
			<TechShowcase />
			<ProjectsCTA />
		</div>
	);
}
