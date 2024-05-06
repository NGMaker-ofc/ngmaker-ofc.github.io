import { Component, computed, input } from '@angular/core';
import { siteData } from '../../../../siteData';

@Component({
  selector: 'app-video-looper',
  imports: [],
  template: ` <section id="videoProjects" class="bg-stone-900 p-5 m-4 shadow-lg">
    <h1 class="p-3 text-center text-4xl font-medium italic">Videos</h1>
    @if (filteredProjects().length) {
    <main
      class="grid grid-cols-2 w-full md:grid-cols-4 gap-4 container mx-auto my-4 bg-transparent"
    >
      @for (project of filteredProjects(); track $index) {
      <article
        class="bg-stone-700 rounded shadow-md hover:scale-[1.02] transition-all w-fit flex flex-col"
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
            class="font-medium italic text-xs md:text-sm lg:text-base text-pretty"
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
      Nenhum vídeo encontrado com a tag: {{ category() }}
    </p>
    }
  </section>`,
})
export class VideoLooper {
  category = input.required<string>();
  filteredProjects = computed(() => {
    const projects = siteData.projects.videos;
    if (this.category().toLowerCase() === 'geral') {
      return projects;
    }
    return projects.filter((project) =>
      project.tag.toLowerCase().includes(this.category().toLowerCase())
    );
  });
  playingVideos: HTMLVideoElement[] = [];
  playVideo = (event: PointerEvent) => {
    // Check if video is already playing
    const videoElement = event.target as HTMLVideoElement;
    const isPlaying = this.playingVideos.includes(videoElement);

    if (isPlaying) {
      // If same video, pause it and remove from playing list
      videoElement.pause();
      videoElement.controls = false;
      this.playingVideos = this.playingVideos.filter((video) => video != videoElement);
    } else {
      // Pause all other videos
      this.playingVideos.forEach((video) => video.pause());
      // Clear the array and add new video
      this.playingVideos = [videoElement];
      videoElement.play();
      videoElement.controls = true;
    }
  };
  resetVideoTime = (event: MouseEvent) => {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.currentTime = 0;
  };
}
