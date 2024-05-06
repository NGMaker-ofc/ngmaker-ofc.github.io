<script setup lang="ts">
import { ref } from 'vue';

useHead({
  title: 'Galeria',
})

const props = defineProps({
  category: {
    type: String,
    default: 'todos'
  }})
  
const searchRef = ref(props.category)

searchRef.value = useRoute().query.category as string || 'todos'
  
type MediaLooperRef = {
  rootEl: HTMLElement | null
}

const imagesRef = ref<MediaLooperRef | null>(null)
const videosRef = ref<MediaLooperRef | null>(null)


const scrollIntoView = (section: 'images' | 'videos') => {
  const targetRef = section === 'images' ? imagesRef : videosRef
  if (!targetRef.value?.rootEl) return
  targetRef.value.rootEl.scrollIntoView({ behavior: 'smooth' })
}

</script>
<template>
<div>
  <Query v-model="searchRef"/>
  <nav class="flex flex-row justify-center items-center pt-4 gap-4">
    <button @click="scrollIntoView('images')" class="text-xl px-5 py-2 bg-[#feb201] hover:bg-[#d79600] rounded uppercase text-white font-bold shadow-md">Fotos</button>
    <button @click="scrollIntoView('videos')" class="text-xl px-5 py-2 bg-[#feb201] hover:bg-[#d79600] rounded uppercase text-white font-bold shadow-md">Videos</button>
  </nav>
  <ImageLooper ref="imagesRef" :show-button="false" :limit-posts="false" :filter="searchRef"/>
  <VideoLooper ref="videosRef" :show-button="false" :limit-posts="false" :filter="searchRef"/>
</div>
</template>