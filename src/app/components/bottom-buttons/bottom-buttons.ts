import { Component, input } from '@angular/core';
import type { SiteData } from '../../../siteData';

@Component({
  selector: 'app-bottom-buttons',
  template: `
    <section id="contact" class="px-8 py-8 shadow-xl bg-stone-900 flex justify-center gap-4">
      <button
        (click)="scrollToTop()"
        class="text-lg md:text-xl px-5 py-1 md:py-2 w-full md:w-fit transition-all bg-[#feb201] hover:bg-[#d79600] hover:scale-105 active:scale-95 rounded text-white font-medium italic shadow-md text-center flex flex-col md:flex-row items-center justify-center gap-1"
      >
        <img src="/icons/up-arrow.svg" width="25" height="25" /><span class="mr-1 text-nowrap"
          >Voltar ao topo</span
        >
      </button>
      <a
        class="text-lg md:text-xl px-5 py-1 md:py-2 w-full md:w-fit transition-all bg-[#feb201] hover:bg-[#d79600] hover:scale-105 active:scale-95 rounded text-white font-medium italic shadow-md text-center flex flex-col md:flex-row items-center justify-center gap-1"
        target="_blank"
        href="https://api.whatsapp.com/send?phone={{
          siteData().whatsapp
        }}&text=Ol%C3%A1%20Nathan,%20vim%20pelo%20site."
        ><img src="/icons/whatsapp.svg" width="25" height="25" /><span class="mr-1 text-nowrap"
          >Entre em contato</span
        ></a
      >
    </section>
  `,
})
export class BottomButtons {
  siteData = input.required<SiteData>();
  scrollToTop() {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
