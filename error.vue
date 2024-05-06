<script setup lang="ts">
</script>
<template>
  <Header />
  <section id="notFound" class="bg-stone-900 text-white p-5 h-dvh grid place-items-center mt-4">
  <div class="container mx-auto flex flex-col items-center justify-center max-w-screen-sm">
    <h1 class="p-2 text-4xl font-bold">Oops, página não encontrada.</h1>
    <p class="text-center text-lg"><NuxtLink to="/" class="underline cursor-pointer">Clique aqui</NuxtLink> para voltar ao início.</p>
  </div>
</section>
<Footer />
</template>