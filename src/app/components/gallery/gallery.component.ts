import { Location } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
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
          (click)="scrollIntoView(images)"
          class="text-xl px-5 py-2 bg-[#feb201] hover:bg-[#d79600] active:scale-95 rounded uppercase text-white font-bold shadow-md cursor-pointer"
        >
          Fotos
        </button>
        <button
          (click)="scrollIntoView(videos)"
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
  constructor(private route: ActivatedRoute, private location: Location) {
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
  scrollIntoView(element: any) {
    console.warn('Scrolling not implemented yet...');
  }
}
