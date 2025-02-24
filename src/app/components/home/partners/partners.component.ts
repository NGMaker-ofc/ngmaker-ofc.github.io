import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  imports: [],
  template: `
    <section
      id="partners"
      class="bg-inherit dark:bg-stone-900 p-5 m-4 shadow-lg"
    >
      <div class="container mx-auto md:max-w-6xl">
        <!-- <h1 class="p-3 text-center text-2xl md:text-4xl font-bold text-nowrap">
      <Icon name="mdi:pan-left" size="50" class="pointer-events-none align-middle" />
      Nossos Clientes
      <Icon name="mdi:pan-right" size="50" class="pointer-events-none align-middle" />
    </h1>
      <div id="partnersContainer" class="mx-auto transition-all duration-1000 overflow-x-scroll whitespace-nowrap max-w-full my-4">
        <a v-for="partner in siteData.partners" :href="partner.url" :key="partner.name" target="_blank" class="mx-auto inline-block">
          <img class="object-cover rounded-lg transition-all hover:scale-105 cursor-pointer " width="100" height="100" :src="partner.image" :alt="partner.name" :title="partner.name" loading="lazy">
        </a>
    </div> -->

        <video
          src="/videos/partners.mp4"
          muted
          loop
          playsinline
          autoplay
          class="w-full transition-all hover:scale-105 bg-transparent bg-cover "
        >
          Nossos Clientes
        </video>
      </div>
    </section>
  `,
})
export class PartnersComponent {}
