<script setup lang="ts">
import { siteData } from '@/siteData';

const categories = computed(() => {
  const allItems = [...siteData.projects.images, ...siteData.projects.videos]
  const allTags = allItems.flatMap(item => 
    item.tag
      .split(' ')  // Split by space to handle multiple tags
      .filter(tag => tag.trim()) // Remove empty strings
      .map(tag => tag.replace('#', '')) // Remove '#' symbol
  )
  const uniqueTags = [...new Set(allTags)] // Remove duplicates
  return uniqueTags.sort((a, b) => a.localeCompare(b))
})

</script>
<template>
  <section id="portifolio" class="bg-inherit dark:bg-stone-900 p-5 m-4 shadow-lg">
  <div class="container mx-auto md:max-w-6xl">
    <h1 class="p-3 text-center text-4xl font-bold">Portifólio</h1>
      <div id="portifolioContainer" class="mx-auto transition-all duration-1000 grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <NuxtLink v-for="tag in categories" :to="`/gallery/?category=${tag}`" :key="tag" class="w-full h-auto transition-all hover:scale-105">
          <img :src="`/images/categories/${tag.toLowerCase()}.webp`" :alt="tag" class="rounded-lg shadow-lg" />
        </NuxtLink> 
    </div>
  </div>
</section>
</template>