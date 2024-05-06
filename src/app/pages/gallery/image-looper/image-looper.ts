import { Component, computed, ElementRef, input, signal, viewChild } from '@angular/core';
import { siteData } from '../../../../siteData';

@Component({
  selector: 'app-image-looper',
  imports: [],
  template: `
    <section id="imageProjects" class="bg-stone-900 p-5 m-4 shadow-lg">
      <h1 class="p-3 text-center text-4xl font-medium italic">Fotos</h1>
      @if (filteredProjects().length > 0){
      <main
        class="grid grid-cols-1 w-full md:grid-cols-3 gap-4 container mx-auto my-4 bg-transparent"
      >
        @for (project of filteredProjects(); track $index) {
        <article
          class="bg-stone-700 rounded shadow-md hover:scale-[1.02] transition-all w-full h-full"
        >
          <div class="w-full h-64 md:h-48 lg:h-56 relative">
            <!-- Skeleton loader -->
            <div
              class="rounded-t-lg bg-black/65 backdrop-blur-sm absolute inset-0 w-full h-full grid place-items-center"
              [class.hidden]="loadedImages().has(project.image)"
            >
              <img src="/icons/loader.svg" alt="Icone de carregamento" />
            </div>
            <img
              (click)="handleDialogImage(project.image)"
              (load)="onImageLoad(project.image)"
              class="rounded-t-lg mx-auto object-cover w-full h-full"
              [src]="project.image"
              [alt]="project.title"
              [loading]="$index >= 2 ? 'lazy' : 'eager'"
            />
          </div>
          <div class="p-0.5 ml-1">
            <a
              [href]="project.link"
              target="_blank"
              class="block font-medium italic text-xs md:text-sm lg:text-base text-pretty"
              >{{ project.title }}</a
            >
            <p class="font-light italic text-balance text-xxs md:text-xs lg:text-sm">
              {{ project.tag }}
            </p>
          </div>
        </article>
        }
      </main>
      } @else {
      <p class="text-center text-2xl font-medium italic">
        Nenhuma foto encontrada com a tag: {{ category() }}
      </p>
      }
      <dialog
        #modal
        (click)="handleDialogImage(undefined)"
        class="bg-transparent max-w-full max-h-screen open:animate-modalopen open:flex focus-visible:outline-none backdrop:animate-modalbg backdrop:bg-black/75 backdrop-blur-sm items-center justify-center overflow-clip m-auto"
      >
        <img src="" alt="" class="w-screen md:w-full object-center" />
      </dialog>
    </section>
  `,
})
export class ImageLooper {
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');
  modalOpen = signal(false);
  category = input.required<string>();
  // Signal to track which images have been loaded
  loadedImages = signal<Set<string>>(new Set());

  filteredProjects = computed(() => {
    const projects = siteData.projects.images;
    if (this.category().toLowerCase() === 'geral') {
      return projects;
    }
    return projects.filter((project) =>
      project.tag.toLowerCase().includes(this.category().toLowerCase())
    );
  });

  // Function to mark an image as loaded
  onImageLoad(imageUrl: string): void {
    // Immediately update the loadedImages signal to display this image
    const currentLoaded = this.loadedImages();
    const newLoaded = new Set(currentLoaded);
    newLoaded.add(imageUrl);
    this.loadedImages.set(newLoaded);
  }
  handleDialogImage(imageURL?: string) {
    if (this.modalOpen()) {
      this.modalOpen.set(false);
      this.modal().nativeElement.close();
      return;
    }
    this.modalOpen.set(true);
    this.modal().nativeElement.showModal();
    const imgElement = this.modal().nativeElement.querySelector('img');
    if (imgElement && imageURL) {
      imgElement.src = imageURL;
    }
  }
}
