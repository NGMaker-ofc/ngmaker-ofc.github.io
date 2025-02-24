import {
  Component,
  computed,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { siteData } from '../../../siteData';

@Component({
  selector: 'app-image-looper',
  imports: [],
  template: `
    <section
      id="imageProjects"
      class="bg-inherit dark:bg-stone-900 p-5 m-4 shadow-lg"
    >
      <h1 class="p-3 text-center text-4xl font-bold">Fotos</h1>
      @if (filteredProjects().length > 0){
      <main
        class="grid grid-cols-1 w-full md:grid-cols-3 gap-4 container mx-auto my-4 bg-transparent"
      >
        @for (project of filteredProjects(); track project.image) {
        <article
          class="bg-inherit dark:bg-stone-700 rounded shadow-md hover:scale-[1.02] transition-all w-full"
        >
          <img
            (click)="handleDialogImage(project.image)"
            class="rounded-t-lg mx-auto object-cover"
            [src]="project.image"
            [alt]="project.title"
            loading="lazy"
          />
          <div class="p-0.5 ml-1">
            <a
              [href]="project.link"
              target="_blank"
              class="block font-bold text-xl md:text-2xl text-pretty"
              >{{ project.title }}</a
            >
            <p class="font-light text-balance mt-0.5 text-sm md:text-base">
              {{ project.tag }}
            </p>
          </div>
        </article>
        }
      </main>
      } @else {
      <p class="text-center text-2xl font-bold">
        Nenhuma foto encontrada com a tag: {{ category() }}
      </p>
      } @if ( filteredProjects().length > 0){
      <div class="mx-auto py-4 mt-4 grid place-items-center">
        <button
          (click)="scrollToTop()"
          class="text-xl px-5 py-2 bg-[#feb201] hover:bg-[#d79600] active:scale-95 rounded uppercase text-white font-bold shadow-md cursor-pointer"
        >
          Voltar ao topo
        </button>
      </div>
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
export class ImageLooperComponent {
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');
  modalOpen = signal(false);
  category = input.required<string>();
  filteredProjects = computed(() => {
    const projects = siteData.projects.images;
    if (this.category().toLowerCase() === 'todos') {
      return projects;
    }
    return projects.filter((project) =>
      project.tag.toLowerCase().includes(this.category().toLowerCase())
    );
  });
  handleDialogImage(imageURL: string | undefined) {
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
  scrollToTop() {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
