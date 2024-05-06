import { Component, input } from '@angular/core';
import type { SiteData } from '../../../siteData';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer
      class="bg-gradient-to-r from-[#000000] to-[#252525] text-center py-4 mt-4 text-white font-normal"
    >
      <a
        class="text-2xl hover:text-[#feb201] italic flex justify-center gap-2 text-center"
        [href]="siteData().socials.instagram"
        target="_blank"
        ><img src="/icons/instagram.svg" width="25" height="25" /><span>Siga no Instagram</span></a
      >

      <p class="mt-2 italic font-light">
        Copyright © {{ year }} -
        <span class="ml-auto"
          >Desenvolvido por
          <a href="https://lzart.com.br" target="_blank" class="underline">LZArt</a></span
        >
      </p>
    </footer>
  `,
})
export class Footer {
  siteData = input.required<SiteData>();
  year = new Date().getFullYear();
}
