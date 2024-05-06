<script setup lang="ts">
import { siteData } from '@/siteData';
import { computed, reactive, ref } from 'vue';

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
  const projects = siteData.projects.images.slice(0, props.limit);
  if (props.filter.toLowerCase() === 'todos') {
    return projects;
  }
  return projects.filter(project => project.tag.includes(props.filter));
})

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

const state = reactive({
  isOpen: false
})

const handleDialogImage = (event: MouseEvent) => {
  const dialog = rootEl.value?.querySelector('dialog');
  const target = event.target as HTMLImageElement;
  if (state.isOpen) {
    dialog?.close();
    state.isOpen = false;
  } else {
    const img = dialog?.querySelector('img');
    img?.setAttribute('src', target.src);
    dialog?.showModal();
    state.isOpen = true;
  }
}

</script>

<template>
  <section ref="rootEl" id="imageProjects" class="bg-inherit dark:bg-stone-900 p-5 m-4 shadow-lg">
    <h1 class="p-3 text-center text-4xl font-bold">Fotos</h1>
      <main v-if="filteredProjects.length" class="grid grid-cols-1 w-full md:grid-cols-3 gap-4 container mx-auto my-4 bg-transparent">
        <article v-for="project in filteredProjects" class="bg-inherit dark:bg-stone-700 rounded shadow-md hover:scale-[1.02] transition-all w-full">
        <img @click="handleDialogImage" class="rounded-t-lg mx-auto object-cover" :src="project.image" :alt="project.title" loading="lazy">
          <div class="p-0.5 ml-1">
            <a :href="project.link" target="_blank" class="block font-bold text-xl md:text-2xl text-pretty">{{ project.title }}</a>
            <p class="font-light text-balance mt-0.5 text-sm md:text-base">{{ project.tag }} </p>
          </div>
        </article>
      </main>
    <p v-else class="text-center text-2xl font-bold">Nenhuma foto encontrada com a tag: {{ filter }}</p>
    <div v-if="filteredProjects.length" class="mx-auto py-4 mt-4 grid place-items-center">
        <button @click="scrollToTop()" class="text-xl px-5 py-2 bg-[#feb201] hover:bg-[#d79600] rounded uppercase text-white font-bold shadow-md">Voltar ao topo</button>
    </div>
    <dialog @click="handleDialogImage" class="bg-transparent max-w-full max-h-screen open:animate-modalf open:flex focus-visible:outline-none backdrop:bg-black/75 backdrop-blur-sm items-center justify-center overflow-clip">
      <img src="" alt="" class="w-screen md:w-full object-center" />
    </dialog>
  </section>
</template>