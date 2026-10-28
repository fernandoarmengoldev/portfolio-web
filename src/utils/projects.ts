import { getCollection, type CollectionEntry } from 'astro:content';
import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from '../data/profile';

export const projectRouteBase = (locale: Locale) => (locale === 'es' ? 'proyectos' : 'projects');

export const getProjectPath = (locale: Locale, slug: string) =>
  getRelativeLocaleUrl(locale, `${projectRouteBase(locale)}/${slug}`);

export async function getProjectStaticPaths(locale: Locale) {
  const projects = await getCollection('projects', ({ data }) => data.locale === locale);
  return projects.map((project) => ({
    params: { slug: project.data.slug },
    props: { project },
  }));
}

export async function getProjectPageData(project: CollectionEntry<'projects'>, locale: Locale) {
  const allProjects = await getCollection('projects');
  const localeProjects = allProjects
    .filter(({ data }) => data.locale === locale)
    .toSorted((a, b) => a.data.order - b.data.order);
  const currentIndex = localeProjects.findIndex(({ id }) => id === project.id);
  const previous = currentIndex > 0 ? localeProjects[currentIndex - 1] : undefined;
  const next = currentIndex < localeProjects.length - 1 ? localeProjects[currentIndex + 1] : undefined;
  const translated = allProjects.find(
    ({ data }) => data.translationKey === project.data.translationKey && data.locale !== locale,
  );

  return { previous, next, translated };
}
