import { Location } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ImageLooper } from './image-looper/image-looper';
import { Query } from './query/query';
import { VideoLooper } from './video-looper/video-looper';

@Component({
  selector: 'app-gallery',
  imports: [ImageLooper, Query, VideoLooper],
  template: `
    <div>
      <div class="flex items-center justify-center px-5 pt-4">
        <div class="md:flex-1"></div>
        <nav class="flex flex-row justify-center items-center gap-4">
          <button
            (click)="scrollIntoView('videoProjects')"
            class="text-xl w-20 py-2 bg-[#feb201] hover:bg-[#d79600] active:scale-95 rounded text-white font-medium italic shadow-md cursor-pointer"
          >
            Vídeos
          </button>
          <button
            (click)="scrollIntoView('imageProjects')"
            class="text-xl w-20 py-2 bg-[#feb201] hover:bg-[#d79600] active:scale-95 rounded text-white font-medium italic shadow-md cursor-pointer"
          >
            Fotos
          </button>
        </nav>
        <div class="flex-1 md:flex justify-end">
          <app-query [(searchModel)]="category" />
        </div>
      </div>
      <app-video-looper #videos [category]="category()" />
      <app-image-looper #images [category]="category()" />
    </div>
  `,
})
export default class Gallery {
  category = signal('geral');
  route = inject(ActivatedRoute);
  location = inject(Location);
  title = inject(Title);
  constructor() {
    this.title.setTitle('Galeria - NG Maker');
    this.route.params.subscribe((params) => {
      if (params['category']) {
        this.category.set(params['category']);
      } else {
        this.category.set('geral');
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
