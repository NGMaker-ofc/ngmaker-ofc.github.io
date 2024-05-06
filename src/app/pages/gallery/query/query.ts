import { Component, computed, model, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { siteData } from '../../../../siteData';

@Component({
  selector: 'app-query',
  imports: [FormsModule],
  template: `
    <search class="flex flex-col justify-center items-center">
      <p class="text-sm md:text-base text-[#feb201] italic font-medium">Filtrar por:</p>
      <select
        [(ngModel)]="searchModel"
        class="bg-stone-700 font-medium italic text-inherit rounded p-1 text-center"
      >
        <option value="geral" class="font-medium italic">Geral</option>
        @for (option of options(); track option) {
        <option [value]="option" class="font-medium italic">
          {{ option.charAt(0).toUpperCase() + option.slice(1) }}
        </option>
        }
      </select>
    </search>
  `,
})
export class Query {
  searchModel = model('todos');
  options = computed(() => {
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
