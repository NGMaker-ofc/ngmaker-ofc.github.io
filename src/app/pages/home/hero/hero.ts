import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <section
      id="hero"
      class="px-8 py-8 shadow-xl h-[17dvh] md:h-[50dvh] bg-[url('/assets/images/heroMobile.webp')] md:bg-[url('/assets/images/hero.webp')] bg-cover bg-center"
    ></section>
  `,
  styles: ``,
})
export class Hero {}
