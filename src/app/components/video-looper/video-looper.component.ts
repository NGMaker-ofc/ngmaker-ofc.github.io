import { Component, computed, input } from '@angular/core';
import { siteData } from '../../../siteData';

@Component({
  selector: 'app-video-looper',
  imports: [],
  template: ` <section
    id="videoProjects"
    class="bg-inherit dark:bg-stone-900 p-5 m-4 shadow-lg"
  >
    <h1 class="p-3 text-center text-4xl font-bold">Videos</h1>
    @if (filteredProjects().length > 0) {
    <main
      class="grid grid-cols-2 w-full md:grid-cols-4 lg:grid-cols-6  gap-4 container mx-auto my-4 bg-transparent"
    >
      @for (project of filteredProjects(); track project.video) {
      <article
        class="bg-inherit dark:bg-stone-700 rounded shadow-md hover:scale-[1.02] transition-all w-full flex flex-col"
      >
        <video
          class="rounded-t-lg mx-auto"
          [src]="project.video"
          (click)="playVideo($event)"
          (dblclick)="resetVideoTime($event)"
          width="360"
          height="480"
          loop
          preload="none"
          [poster]="project.video.replace('.mp4', '.webp')"
          controlslist="nodownload noremoteplayback disablepictureinpicture "
          disablepictureinpicture
        ></video>
        <div class="p-0.5 ml-1 my-auto">
          <a
            [href]="project.link"
            target="_blank"
            class="font-bold text-xs md:text-sm lg:text-base text-pretty"
            >{{ project.title }}</a
          >
          <p class="font-light text-balance text-xxs md:text-xs lg:text-sm">
            {{ project.tag }}
          </p>
        </div>
      </article>
      }
    </main>
    } @else {
    <p class="text-center text-2xl font-bold">
      Nenhum vídeo encontrado com a tag: {{ category() }}
    </p>
    } @if (filteredProjects().length > 0) {
    <div class="mx-auto py-4 mt-4 grid place-items-center">
      <button
        (click)="scrollToTop()"
        class="text-xl px-5 py-2 bg-[#feb201] hover:bg-[#d79600] active:scale-95 rounded uppercase text-white font-bold shadow-md cursor-pointer"
      >
        Voltar ao topo
      </button>
    </div>
    }
  </section>`,
})
export class VideoLooperComponent {
  category = input.required<string>();
  filteredProjects = computed(() => {
    const projects = siteData.projects.videos;
    if (this.category().toLowerCase() === 'todos') {
      return projects;
    }
    return projects.filter((project) =>
      project.tag.toLowerCase().includes(this.category().toLowerCase())
    );
  });
  playingVideos: HTMLVideoElement[] = [];
  playVideo = (event: Event) => {
    // Check if video is already playing
    const videoElement = event.target as HTMLVideoElement;
    const isPlaying = this.playingVideos.includes(videoElement);

    if (isPlaying) {
      // If same video, pause it and remove from playing list
      videoElement.pause();
      videoElement.controls = false;
      this.playingVideos = this.playingVideos.filter(
        (video) => video != videoElement
      );
    } else {
      // Pause all other videos
      this.playingVideos.forEach((video) => video.pause());
      // Clear the array and add new video
      this.playingVideos = [videoElement];
      videoElement.play();
      videoElement.controls = true;
    }
  };
  resetVideoTime = (event: Event) => {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.currentTime = 0;
  };
  scrollToTop = () => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
}
