import { Location } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ImageLooperComponent } from '../image-looper/image-looper.component';
import { QueryComponent } from '../query/query.component';
import { VideoLooperComponent } from '../video-looper/video-looper.component';

@Component({
  selector: 'app-gallery',
  imports: [ImageLooperComponent, QueryComponent, VideoLooperComponent],
  template: `
    <div>
      <app-query [(searchModel)]="category" />
      <nav class="flex flex-row justify-center items-center pt-4 gap-4">
        <button
          (click)="scrollIntoView('imageProjects')"
          class="text-xl px-5 py-2 bg-[#feb201] hover:bg-[#d79600] active:scale-95 rounded uppercase text-white font-bold shadow-md cursor-pointer"
        >
          Fotos
        </button>
        <button
          (click)="scrollIntoView('videoProjects')"
          class="text-xl px-5 py-2 bg-[#feb201] hover:bg-[#d79600] active:scale-95 rounded uppercase text-white font-bold shadow-md cursor-pointer"
        >
          Videos
        </button>
      </nav>
      <app-image-looper #images [category]="category()" />
      <app-video-looper #videos [category]="category()" />
    </div>
  `,
})
export class GalleryComponent {
  category = signal('Todos');
  route = inject(ActivatedRoute);
  location = inject(Location);
  title = inject(Title);
  constructor() {
    this.title.setTitle('Galería - NG Maker');
    this.route.params.subscribe((params) => {
      if (params['category']) {
        this.category.set(params['category']);
      } else {
        this.category.set('Todos');
      }
    });
    effect(() => {
      this.location.replaceState(`gallery/${this.category()}`);
    });
  }
  scrollIntoView(id: string) {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
