import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteData } from '../../../../siteData';

@Component({
  selector: 'app-portifolio',
  imports: [RouterLink],
  template: `
    <section id="portifolio" class="bg-stone-900 p-5 m-4 shadow-lg">
      <div class="container mx-auto md:max-w-6xl">
        <h1 class="p-3 text-center text-4xl font-medium italic">Portifólio</h1>
        <div
          id="portifolioContainer"
          class="mx-auto transition-all duration-1000 grid grid-cols-1 md:grid-cols-4 gap-4 my-4"
        >
          <!-- Static Gerais category -->
          <a
            [routerLink]="['/gallery', 'geral']"
            class="w-full h-auto transition-all hover:scale-105"
          >
            <img src="/images/categories/gerais.webp" alt="Gerais" class="rounded-lg shadow-lg" />
          </a>

          @for (tag of categories(); track tag) {
          <a [routerLink]="['/gallery', tag]" class="w-full h-auto transition-all hover:scale-105">
            <img
              src="/images/categories/{{ tag.toLowerCase() }}.webp"
              [alt]="tag"
              class="rounded-lg shadow-lg"
            />
          </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class Portifolio {
  categories = computed(() => {
    const allItems = [...siteData.projects.images, ...siteData.projects.videos];
    const allTags = allItems.flatMap(
      (item) =>
        item.tag
          .split(' ') // Split by space to handle multiple tags
          .filter((tag) => tag.trim()) // Remove empty strings
          .map((tag) => tag.replace('#', '')) // Remove '#' symbol
    );
    const uniqueTags = [...new Set(allTags)]; // Remove duplicates
    return uniqueTags.sort((a, b) => a.localeCompare(b));
  });
}
