import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  template: `
    <section
      id="notFound"
      class="bg-stone-900 text-white p-5 h-dvh grid place-items-center mt-4 bg-[url('/images/hero.webp')] bg-cover bg-no-repeat"
    >
      <div
        class="container mx-auto p-8 flex flex-col items-center justify-center max-w-screen-sm bg-stone-900/75 backdrop-blur-sm rounded-2xl"
      >
        <h1 class="p-2 text-4xl font-medium italic">Oops, página não encontrada.</h1>
        <p class="text-center text-lg">
          <a routerLink="/" class="underline cursor-pointer">Clique aqui</a>
          para voltar ao início.
        </p>
      </div>
    </section>
  `,
})
export default class NotFound {
  title = inject(Title);
  constructor() {
    this.title.setTitle('Página não encontrada - NG Maker');
  }
}
