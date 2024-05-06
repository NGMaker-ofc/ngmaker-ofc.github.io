import { Component, input } from '@angular/core';
import type { SiteData } from '../../../types';

@Component({
  selector: 'app-whats-app-button',
  template: `
    <section
      id="contact"
      class="px-8 py-8 shadow-xl dark:bg-stone-900 grid place-items-center"
    >
      <a
        class="text-lg md:text-xl px-5 py-3 w-full md:w-fit transition-all bg-[#feb201] hover:bg-[#d79600] hover:scale-105 active:scale-95 rounded uppercase text-white font-bold shadow-md text-center flex justify-center gap-2"
        target="_blank"
        href="https://api.whatsapp.com/send?phone={{
          siteData().whatsapp
        }}&text=Ol%C3%A1%20Nathan,%20vim%20pelo%20site."
        ><img src="/icons/whatsapp.svg" width="25" height="25" /><span
          >Entrar em contato</span
        ></a
      >
    </section>
  `,
})
export class WhatsAppButtonComponent {
  siteData = input.required<SiteData>();
}
