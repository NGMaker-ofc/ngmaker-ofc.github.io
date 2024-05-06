<script setup lang="ts">
import { siteData } from './siteData';

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | NG Maker` : 'NG Maker';
  }
})
useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${siteData.siteName}` : siteData.siteName;},
  description: siteData.description,
  ogType: 'website',
  ogUrl: siteData.url,
  ogTitle: siteData.siteName,
  ogDescription: siteData.description,
  ogImage: siteData.defaultImage,
  twitterCard: 'summary_large_image',
  twitterTitle: siteData.siteName,
  twitterDescription: siteData.description,
  twitterImage: siteData.defaultImage,
})
</script>

<template>
  <div class="dark:bg-stone-950 dark:text-stone-100">
    <Header />
    <NuxtPage />
    <WhatsAppButton />
    <Footer />
  </div>
</template>
<style>
html {
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.20s ease;
  /* transform-origin: top center; */
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* scale: 0.2; */
}
</style>
