/**
 * Data para TechCards.
 * @param {string} name Nombre de la tecnología.
 * @param {'font'|'image'} type Tipo de ícono.
 * @param {string} icon Recurso o clase del ícono.
 * @param {string} color Color principal.
 * @param {string} [iconClassName] Clases CSS opcionales.
 */
export const langIcons = [
	{
		name: 'Python',
		type: 'font',
		icon: 'nf-dev-python',
		color: 'text-[#3776AB]',
		iconClassName: 'text-shadow-lg text-shadow-accent-yellow-bold',
	},
	{
		name: 'JavaScript',
		type: 'font',
		icon: 'nf-dev-javascript nf-dev-html5 nf-dev-css3',
		color: 'text-[#F7DF1E]',
		iconClassName: 'text-shadow-lg text-shadow-accent-orange-bold',
	},
	{
		name: 'HTML5',
		type: 'font',
		icon: 'nf-dev-html5',
		color: 'text-[#E44D26]',
		iconClassName: 'text-shadow-lg text-shadow-pearl',
	},
	{
		name: 'CSS3',
		type: 'font',
		icon: 'nf-dev-css3',
		color: 'text-[#1572B6]',
		iconClassName: 'text-shadow-lg text-shadow-pearl',
	},
	{
		name: 'Bash',
		type: 'font',
		icon: 'nf-dev-bash',
		color: 'text-[#4EAA25]',
		iconClassName: 'text-shadow-lg text-shadow-pearl',
	},
	{
		name: 'Java',
		type: 'font',
		icon: 'nf-dev-java',
		color: 'text-[#007396]',
		iconClassName: 'text-shadow-lg text-shadow-accent-red',
	},
	{
		name: 'SQL',
		type: 'font',
		icon: 'nf-oct-database',
		color: 'text-[#CC2927]',
		iconClassName: 'text-shadow-sm text-shadow-accent-red',
	},
];

export const techIcons = [
	{
		name: 'Linux',
		type: 'font',
		icon: 'nf-dev-linux',
		color: 'text-[#FCC624]',
		iconClassName: 'text-shadow-sm text-shadow-accent-orange-bold',
	},
	{
		name: 'Pandas',
		type: 'font',
		icon: 'nf-dev-pandas',
		color: 'text-[#150458]',
		iconClassName: 'text-shadow-lg text-shadow-accent-blue',
	},
	{
		name: 'Numpy',
		type: 'font',
		icon: 'nf-dev-numpy',
		color: 'text-[#013243]',
		iconClassName: 'text-shadow-xl text-shadow-accent-teal',
	},
	{
		name: 'SQLite',
		type: 'font',
		icon: 'nf-fa-database',
		color: 'text-[#003B57]',
		iconClassName: 'text-shadow-sm text-shadow-pearl',
	},
	{
		name: 'Git',
		type: 'font',
		icon: 'nf-dev-git',
		color: 'text-[#F05030]',
		iconClassName: 'text-shadow-lg text-shadow-accent-yellow',
	},
	{
		name: 'GitHub',
		type: 'font',
		icon: 'nf-fa-github',
		color: 'text-[#181717]',
		iconClassName: 'text-shadow-lg text-shadow-pearl',
	},
	{
		name: 'Deno',
		type: 'font',
		icon: 'nf-dev-denojs',
		color: 'text-[#000000]',
		iconClassName: 'text-shadow-lg text-shadow-pearl',
	},
	{
		name: 'Node.js',
		type: 'font',
		icon: 'nf-dev-nodejs',
		color: 'text-[#339933]',
		iconClassName: 'text-shadow-lg text-shadow-pearl scale-150',
	},
	{
		name: 'Canva',
		type: 'font',
		icon: 'nf-dev-canva',
		color: 'text-[#00C4CC]',
		iconClassName:
			'text-shadow-sm text-shadow-accent-purple-bold scale-150',
	},
];

export const hobbyIcons = [
	{
		name: 'QEMU',
		type: 'image',
		icon: '/logos/qemu.svg',
		color: 'text-[#E40053]',
		iconClassName: 'shadow-svg text-lg-0',
	},
	{
		name: 'Arch',
		type: 'font',
		icon: 'nf-linux-archlinux',
		color: 'text-[#1793D1]',
		iconClassName: 'text-shadow-lg text-shadow-pearl',
	},
	{
		name: 'FreeBSD',
		type: 'font',
		icon: 'nf-linux-freebsd',
		color: 'text-[#AB2B28]',
		iconClassName: 'text-shadow-lg text-shadow-accent-red',
	},
	{
		name: 'Alpine',
		type: 'font',
		icon: 'nf-linux-alpine',
		color: 'text-[#0D597F]',
		iconClassName: 'text-shadow-lg text-shadow-pearl',
	},
	{
		name: 'Fedora',
		type: 'font',
		icon: 'nf-linux-fedora',
		color: 'text-[#51A2DA]',
		iconClassName: 'text-shadow-lg text-shadow-pearl',
	},
	{
		name: 'Debian',
		type: 'font',
		icon: 'nf-linux-debian',
		color: 'text-[#A81D33]',
		iconClassName: 'text-shadow-lg text-shadow-pearl',
	},
	{
		name: 'Godot',
		type: 'font',
		icon: 'nf-dev-godot',
		color: 'text-[#478CBF]',
		iconClassName: 'text-shadow-lg text-shadow-pearl',
	},
	{
		name: 'Discord',
		type: 'font',
		icon: 'nf-fa-discord',
		color: 'text-[#5865F2]',
		iconClassName: 'text-shadow-lg text-shadow-pearl',
	},
];

export const conditionalIcons = {
	GitHub: 'text-shadow-lg text-shadow-lg-0',
	Deno: 'text-shadow-lg text-shadow-lg-0',
	QEMU: 'shadow-svg text-accent-orange-bold',
};
