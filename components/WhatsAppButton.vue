<script setup lang="ts">
import { siteData } from '~/siteData';
</script>
<template>
  <section id="contact" class="px-8 py-8 shadow-xl dark:bg-stone-900 grid place-items-center">
    <a class="text-lg md:text-xl px-5 py-3 w-full md:w-fit transition-all bg-[#feb201] hover:bg-[#d79600] hover:scale-105 rounded uppercase text-white font-bold shadow-md text-center" target="_blank" :href="`https://api.whatsapp.com/send?phone=${siteData.whatsapp}&text=Ol%C3%A1%20Nathan,%20vim%20pelo%20site.`"><Icon name="mdi:whatsapp" size="1.5em" class="align-top" /> Entrar em contato</a>
  </section>
</template>