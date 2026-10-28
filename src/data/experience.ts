import type { Locale } from './profile';

type LocalizedText = Record<Locale, string>;

export interface ExperienceItem {
  company: string;
  role: LocalizedText;
  location: LocalizedText;
  period: LocalizedText;
  responsibilities: Record<Locale, string[]>;
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Geriátrico Doña Rosa',
    role: { es: 'Desarrollador Fullstack Junior', en: 'Junior Full-stack Developer' },
    location: { es: 'Alicante, España', en: 'Alicante, Spain' },
    period: { es: 'Octubre de 2025 - Febrero de 2026', en: 'October 2025 - February 2026' },
    responsibilities: {
      es: [
        'Desarrollo de múltiples sitios web con Astro, Tailwind CSS y TypeScript.',
        'Creación y configuración de un servidor Linux y sus servicios.',
        'Administración de seguridad mediante Cloudflare.',
      ],
      en: [
        'Built multiple websites with Astro, Tailwind CSS and TypeScript.',
        'Set up and configured a Linux server and its services.',
        'Managed web security through Cloudflare.',
      ],
    },
    technologies: ['Astro', 'Tailwind CSS', 'TypeScript', 'Linux', 'Cloudflare'],
  },
  {
    company: 'SMART & FUN',
    role: { es: 'Desarrollador Web Junior', en: 'Junior Web Developer' },
    location: { es: 'Alicante, España', en: 'Alicante, Spain' },
    period: { es: 'Septiembre de 2023 - Noviembre de 2023', en: 'September 2023 - November 2023' },
    responsibilities: {
      es: ['Mantenimiento de una página web con Ruby, Rails, HTML, CSS, JavaScript y Bootstrap.'],
      en: ['Maintained a website using Ruby, Rails, HTML, CSS, JavaScript and Bootstrap.'],
    },
    technologies: ['Ruby', 'Rails', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    company: 'NTT Data',
    role: { es: 'Desarrollador Web Junior', en: 'Junior Web Developer' },
    location: { es: 'Alicante, España', en: 'Alicante, Spain' },
    period: { es: 'Marzo de 2022 - Junio de 2022', en: 'March 2022 - June 2022' },
    responsibilities: {
      es: ['Mantenimiento y actualización del frontend de una aplicación web con Java, Spring, HTML, CSS y Bootstrap.'],
      en: ['Maintained and updated the frontend of a web application using Java, Spring, HTML, CSS and Bootstrap.'],
    },
    technologies: ['Java', 'Spring', 'HTML', 'CSS', 'Bootstrap'],
  },
];
