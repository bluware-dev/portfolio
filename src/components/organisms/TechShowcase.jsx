import { memo, useRef } from 'react';

import useFakedFirstRender from '@/hooks/useFakeFirstRender';
import useIsReady from '@/hooks/useIsReady';

import TechCard from '@/components/molecules/TechCard';
import {
	conditionalIcons,
	hobbyIcons,
	langIcons,
	techIcons,
} from '@/data/techStack';

const SECTIONS = [
	{
		icons: langIcons,
		title: 'Lenguajes',
		id: 'languages',
		delay: 'delay-[2000ms]',
		secondaryDelay: 'delay-[100ms]',
	},
	{
		icons: techIcons,
		title: 'Tecnologías',
		id: 'technologies',
		delay: 'delay-[2500ms]',
		secondaryDelay: 'delay-[200ms]',
	},
	{
		icons: hobbyIcons,
		title: 'Hobbies',
		id: 'hobbies',
		delay: 'delay-[3000ms]',
		secondaryDelay: 'delay-[300ms]',
	},
];

const WILL_CHANGE_TRANSFORM = { willChange: 'transform' };

const TechSection = memo(function TechSection({
	section,
	timingClass,
	isReady,
}) {
	const renderCount = useRef(0);
	renderCount.current += 1;

	const { id, title, icons } = section;

	const titleClasses = `text-lg-1 text-shadow-xl text-shadow-accent-blue-dark mb-2 text-center text-2xl ease-in-out ${
		isReady ? '-translate-y-0 rotate-y-0' : '-translate-y-2 rotate-y-270'
	} ${timingClass}`;

	const itemClasses = `ease-in-out ${
		isReady ? '-translate-y-0 rotate-y-0' : 'translate-y-2 rotate-y-450'
	} ${timingClass}`;

	return (
		<div className="mb-4 sm:mb-6">
			<h3 className={titleClasses}>{title}</h3>
			<ul
				id={id}
				className="container mx-auto flex flex-wrap justify-center gap-2"
			>
				{icons.map(({ name, icon, color, type, iconClassName }) => (
					<li
						key={name}
						style={WILL_CHANGE_TRANSFORM}
						className={itemClasses}
					>
						<TechCard
							name={name}
							icon={icon}
							color={color}
							type={type}
							iconClassName={conditionalIcons[name] || ''}
							animateIconClassName={iconClassName}
							isReady={isReady}
						/>
					</li>
				))}
			</ul>
		</div>
	);
});

export default function TechShowcase() {
	const isReady = useIsReady();
	const isFirstRender = useFakedFirstRender(isReady);

	return (
		<div id="tech-stack">
			{SECTIONS.map((section) => {
				const timingClass = isFirstRender.current
					? `${section.delay} duration-750`
					: `${section.secondaryDelay} duration-500`;

				return (
					<TechSection
						key={section.id}
						section={section}
						timingClass={timingClass}
						isReady={isReady}
					/>
				);
			})}
		</div>
	);
}
