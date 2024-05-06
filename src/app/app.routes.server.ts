import { RenderMode, ServerRoute } from '@angular/ssr';
import { siteData } from '../siteData';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'gallery/:category',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      // Extract all tags from projects
      const allTags = new Set<string>();

      // Add "geral" as a default category
      allTags.add('geral');

      // Extract tags from images
      siteData.projects.images.forEach((project) => {
        const tags = project.tag
          .split(' ')
          .filter((tag) => tag.startsWith('#'))
          .map((tag) => tag.substring(1));

        tags.forEach((tag) => allTags.add(tag));
      });

      // Extract tags from videos
      siteData.projects.videos.forEach((video) => {
        const tags = video.tag
          .split(' ')
          .filter((tag) => tag.startsWith('#'))
          .map((tag) => tag.substring(1));

        tags.forEach((tag) => allTags.add(tag));
      });

      // Convert Set to array of objects with category parameter
      return Array.from(allTags).map((category) => {
        console.log(`Prerendering category: ${category}`);
        return { category };
      });
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
