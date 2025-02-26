import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { SiteData } from '../../../types';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header
      class="py-2 px-4 md:px-16 flex justify-between bg-gradient-to-r from-[#000000] to-[#252525]"
    >
      <a routerLink="/" class="hover:scale-105 active:scale-95 transition-all"
        ><img [src]="siteData().siteLogo" alt="NGMaker" width="217"
      /></a>
      <button
        (click)="openMenu()"
        id="menuBtn"
        class="block md:hidden bg-gradient-to-r from-[#f0ae21] to-[#feb201] h-14 w-14 rounded-full text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="35"
          height="35"
          class="mx-auto"
          fill="#fff"
        >
          <title>Menu</title>
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </button>
      <nav id="fullMenu" class="hidden md:flex">
        <button
          (click)="closeMenu()"
          id="closeBtn"
          class="fixed hidden right-4 top-4 text-white text-2xl cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <title>Close</title>
            <path
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
        </button>
        <ul id="menuList" class="flex gap-1 items-center">
          @for (item of siteData().navigation; track item.url) {
          <li class="p-3 text-lg text-slate-200 align-middle">
            @if(item.url.includes("https") || item.url.includes("#")) {
            <a
              [href]="item.url"
              class="hover:text-[#feb201] hover:scale-105 transition-all font-bold"
              >{{ item.name }}</a
            >
            } @else {
            <a
              [routerLink]="item.url"
              routerLinkActive="text-[#ffb200]"
              [routerLinkActiveOptions]="{ exact: true }"
              class="hover:text-[#feb201] hover:scale-105 transition-all font-bold"
              >{{ item.name }}</a
            >
            }
          </li>
          }
        </ul>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  siteData = input.required<SiteData>();
  openMenu() {}
  closeMenu() {}
}
