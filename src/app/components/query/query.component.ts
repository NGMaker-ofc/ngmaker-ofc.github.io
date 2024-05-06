import { Component, computed, model, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { siteData } from '../../../siteData';

@Component({
  selector: 'app-query',
  imports: [FormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  template: `
    <search class="flex flex-col justify-center items-center pt-4">
      <p>Filtrar por:</p>
      <select [(ngModel)]="searchModel" class="bg-stone-700 text-inherit">
        <option value="Todos">Todos</option>
        @for (option of options(); track option) {
        <option [value]="option">
          {{ option }}
        </option>
        }
      </select>
    </search>
  `,
})
export class QueryComponent {
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
