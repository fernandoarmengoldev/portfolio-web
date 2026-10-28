import type { Locale } from './profile';

export interface EducationItem {
  title: Record<Locale, string>;
  center: string;
  period: Record<Locale, string>;
}

export const education: EducationItem[] = [
  {
    title: { es: 'Desarrollo de Aplicaciones Web - DAW', en: 'Web Application Development - DAW' },
    center: 'IG Formación',
    period: { es: '2024 - 2025', en: '2024 - 2025' },
  },
  {
    title: { es: 'Desarrollo de Aplicaciones Multiplataforma - DAM', en: 'Cross-platform Application Development - DAM' },
    center: 'IG Formación',
    period: { es: '2020 - 2022', en: '2020 - 2022' },
  },
  {
    title: { es: 'Bachillerato de Ciencias - BCT', en: 'Science Baccalaureate - BCT' },
    center: 'IES Jaime II',
    period: { es: 'Periodo no especificado', en: 'Period not provided' },
  },
  {
    title: { es: 'Curso de Marketing y Comunicación Digital', en: 'Digital Marketing and Communication Course' },
    center: 'Cámara de Comercio',
    period: { es: '2024', en: '2024' },
  },
];
