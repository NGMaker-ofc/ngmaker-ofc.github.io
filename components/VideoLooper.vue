<script setup lang="ts">
import { siteData } from '@/siteData';
import { computed, ref } from 'vue';

const props = defineProps({
  limit: {
    type: Number,
    default: siteData.projects.images.length
  },
  filter: {
    type: String,
    default: ''
  }
})

const filteredProjects = computed(() => {
  const projects = siteData.projects.videos.slice(0, props.limit);
  if (props.filter.toLowerCase() === 'todos') {
    return projects;
  }
  return projects.filter(project => project.tag.includes(props.filter));
})


let playingVideos: HTMLVideoElement[] = [];

const playVideo = (videoElement: HTMLVideoElement) => {
// Check if video is already playing
  const isPlaying = playingVideos.includes(videoElement);

  if (isPlaying) {
    // If same video, pause it and remove from playing list
    videoElement.pause();
    videoElement.controls = false;
    playingVideos = playingVideos.filter(video => video != videoElement);
  } else {
    // Pause all other videos
    playingVideos.forEach(video => video.pause());
    // Clear the array and add new video
    playingVideos = [videoElement];
    videoElement.play();
    videoElement.controls = true;
  }
}

const resetVideoTime = (videoElement: HTMLVideoElement) => {
  videoElement.currentTime = 0;
}

const rootEl = ref<HTMLElement | null>(null)

defineExpose({
  rootEl
})

const scrollToTop = () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

</script>
<template>
    <section ref="rootEl" id="videoProjects" class="bg-inherit dark:bg-stone-900 p-5 m-4 shadow-lg">
    <h1 class="p-3 text-center text-4xl font-bold">Videos</h1>
    <main v-if="filteredProjects.length" class="grid grid-cols-2 w-full md:grid-cols-4 lg:grid-cols-6  gap-4 container mx-auto my-4 bg-transparent">
      <article v-for="project in filteredProjects" class="bg-inherit dark:bg-stone-700 rounded shadow-md hover:scale-[1.02] transition-all w-full flex flex-col">
              <video class="rounded-t-lg mx-auto" :src="project.video" :alt="project.title" loading="lazy" @click="playVideo($event.target as HTMLVideoElement)" @dblclick="resetVideoTime($event.target as HTMLVideoElement)" width="360" height="480" loop preload="none" :poster="project.video.replace('.mp4', '.webp')" controlslist="nodownload noremoteplayback disablepictureinpicture " disablepictureinpicture></video>
            <div class="p-0.5 ml-1 my-auto">
                <a :href="project.link" target="_blank" class="font-bold text-xs md:text-sm lg:text-base text-pretty">{{ project.title }}</a>
                <p class="font-light text-balance text-xxs md:text-xs lg:text-sm">{{ project.tag }} </p>
            </div>
        </article>
      </main>
    <p v-else class="text-center text-2xl font-bold">Nenhum vídeo encontrado com a tag: {{ filter }}</p>
    <div v-if="filteredProjects.length" class="mx-auto py-4 mt-4 grid place-items-center">
        <button @click="scrollToTop()" class="text-xl px-5 py-2 bg-[#feb201] hover:bg-[#d79600] rounded uppercase text-white font-bold shadow-md">Voltar ao topo</button>
    </div>
</section>
</template>