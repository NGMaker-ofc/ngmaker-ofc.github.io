import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  template: ` <section id="aboutUs" class="bg-stone-900 pt-8 shadow-xl m-4">
    <img
      class="hidden md:block transition-all hover:scale-105"
      src="/assets/images/about.webp"
      alt="AboutUs"
    />
    <img
      class="md:hidden transition-all hover:scale-105"
      src="/assets/images/aboutMobile.webp"
      alt="AboutUs"
    />
  </section>`,
})
export class AboutUs {}
