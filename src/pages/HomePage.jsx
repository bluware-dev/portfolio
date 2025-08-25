import ProjectsCTA from '@/components/molecules/ProjectsCTA';
import HomeIntro from '@/components/organisms/HomeIntro';
import TechShowcase from '@/components/organisms/TechShowcase';

export default function HomePage() {
	return (
		<div id="home">
			<HomeIntro />
			<TechShowcase />
			<ProjectsCTA />
		</div>
	);
}
