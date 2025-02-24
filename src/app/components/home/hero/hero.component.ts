import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <section
      id="hero"
      class="px-8 py-8 shadow-xl h-[30dvh] md:h-[50dvh] bg-[url('/images/hero.webp')] bg-cover bg-center"
    ></section>
  `,
  styles: ``,
})
export class HeroComponent {}
