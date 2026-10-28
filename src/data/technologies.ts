export interface Technology {
  name: string;
  /** Iconify name. skill-icons are already tiles; others get drawn on one. */
  icon?: string;
  /** Glyph colour when the icon is a flat logo drawn on a tile. */
  tint?: string;
  /** Text shown on the tile when no logo exists. */
  monogram?: string;
}

export interface TechnologyCategory {
  key: 'languages' | 'frontend' | 'databases' | 'infrastructure';
  items: Technology[];
}

/** Main stack: what I reach for day to day, grouped by area. */
export const technologyCategories: TechnologyCategory[] = [
  {
    key: 'languages',
    items: [
      { name: 'TypeScript', icon: 'skill-icons:typescript' },
      { name: 'Rust', icon: 'skill-icons:rust' },
      { name: 'Kotlin', icon: 'skill-icons:kotlin-dark' },
    ],
  },
  {
    key: 'frontend',
    items: [
      { name: 'Astro', icon: 'skill-icons:astro' },
      { name: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-dark' },
    ],
  },
  {
    key: 'databases',
    items: [
      { name: 'PostgreSQL', icon: 'skill-icons:postgresql-dark' },
      { name: 'SQLite', icon: 'skill-icons:sqlite' },
    ],
  },
  {
    key: 'infrastructure',
    items: [
      { name: 'Linux', icon: 'skill-icons:linux-dark' },
      { name: 'Docker', icon: 'skill-icons:docker' },
      { name: 'Cloudflare', icon: 'skill-icons:cloudflare-dark' },
      { name: 'Nginx', icon: 'skill-icons:nginx' },
      // Local logo from src/icons/, drawn on the shared tile.
      { name: 'Dokploy', icon: 'dokploy', tint: '#ffffff' },
      { name: 'Portainer', icon: 'simple-icons:portainer', tint: '#13bef9' },
      { name: 'Git', icon: 'skill-icons:git' },
      { name: 'GitHub', icon: 'skill-icons:github-dark' },
      { name: 'Bun', icon: 'skill-icons:bun-dark' },
      { name: 'Android Studio', icon: 'skill-icons:androidstudio-dark' },
    ],
  },
];

/** Other technologies I've worked with, uncategorised. */
export const otherTechnologies: Technology[] = [
  { name: 'JavaScript', icon: 'skill-icons:javascript' },
  { name: 'Node.js', icon: 'skill-icons:nodejs-dark' },
  { name: 'Java', icon: 'skill-icons:java-dark' },
  { name: 'C#', icon: 'skill-icons:cs' },
  { name: 'Python', icon: 'skill-icons:python-dark' },
  { name: 'PHP', icon: 'skill-icons:php-dark' },
  { name: 'Ruby', icon: 'skill-icons:ruby' },
  { name: 'React', icon: 'skill-icons:react-dark' },
  { name: 'HTML', icon: 'skill-icons:html' },
  { name: 'CSS', icon: 'skill-icons:css' },
  { name: 'Bootstrap', icon: 'skill-icons:bootstrap' },
  { name: 'Spring', icon: 'skill-icons:spring-dark' },
  { name: 'Rails', icon: 'skill-icons:rails' },
  // skill-icons has no JavaFX glyph; it ships with the JDK, so use Java's.
  { name: 'JavaFX', icon: 'skill-icons:java-dark' },
  { name: 'MySQL', icon: 'skill-icons:mysql-dark' },
  { name: 'MongoDB', icon: 'skill-icons:mongodb' },
];
