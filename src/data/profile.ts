export const profile = {
  name: 'Fernando D. Armengol Gonzalez',
  role: 'Desarrollador de Software Fullstack',
  location: 'Alicante, España',
  email: 'dev@fernandoarmengol.com',
  githubUsername: 'fernandoarmengoldev',
  githubUrl: 'https://github.com/fernandoarmengoldev',
  linkedinUrl: 'https://www.linkedin.com/in/fernando-d-armengol-gonz%C3%A1lez-090209265/',
  availability: {
    es: 'Disponible para nuevas oportunidades',
    en: 'Open to new opportunities',
  },
  cv: {
    esAvailable: true,
    enAvailable: true,
    esPath: '/cv/Fernando-D-Armengol-Gonzalez-CV-es.pdf',
    enPath: '/cv/Fernando-D-Armengol-Gonzalez-CV-en.pdf',
  },
} as const;

export type Locale = 'es' | 'en';
