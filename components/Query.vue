<script lang="ts" setup>
import { siteData } from '@/siteData';

const searchModel = defineModel({ default: 'todos'})

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
  <search class="flex flex-col justify-center items-center pt-4">
    <p>Filtrar por:</p>
    <select v-model="searchModel" class="dark:bg-stone-700 dark:text-inherit">
        <option value="todos">Todos</option>
        <option v-for="tag in categories" :key="tag" :value="tag">
          {{ tag }}
        </option>
      </select>
  </search>
</template>