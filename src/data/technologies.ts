export interface TechnologyCategory {
  key: 'languages' | 'frontend' | 'backend' | 'databases' | 'infrastructure';
  items: { name: string; icon: string; highlighted?: boolean }[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    key: 'languages',
    items: [
      { name: 'TypeScript', icon: 'simple-icons:typescript', highlighted: true },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'Java', icon: 'simple-icons:openjdk' },
      { name: 'C#', icon: 'simple-icons:sharp' },
      { name: 'Python', icon: 'simple-icons:python' },
      { name: 'PHP', icon: 'simple-icons:php' },
      { name: 'Ruby', icon: 'simple-icons:ruby' },
      { name: 'Kotlin', icon: 'simple-icons:kotlin', highlighted: true },
    ],
  },
  {
    key: 'frontend',
    items: [
      { name: 'Astro', icon: 'simple-icons:astro', highlighted: true },
      { name: 'React', icon: 'simple-icons:react' },
      { name: 'HTML', icon: 'simple-icons:html5' },
      { name: 'CSS', icon: 'simple-icons:css' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
      { name: 'Bootstrap', icon: 'simple-icons:bootstrap' },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'Spring', icon: 'simple-icons:spring' },
      { name: 'Rails', icon: 'simple-icons:rubyonrails' },
      { name: 'JavaFX', icon: 'simple-icons:openjdk' },
    ],
  },
  {
    key: 'databases',
    items: [
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'MySQL', icon: 'simple-icons:mysql' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb' },
      { name: 'SQLite', icon: 'simple-icons:sqlite' },
    ],
  },
  {
    key: 'infrastructure',
    items: [
      { name: 'Linux', icon: 'simple-icons:linux', highlighted: true },
      { name: 'Docker', icon: 'simple-icons:docker', highlighted: true },
      { name: 'Cloudflare', icon: 'simple-icons:cloudflare', highlighted: true },
      { name: 'Git', icon: 'simple-icons:git' },
    ],
  },
];
