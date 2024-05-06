import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { siteData } from '../siteData';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { BottomButtons } from './components/bottom-buttons/bottom-buttons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, BottomButtons],
  template: `
    <div class="bg-stone-950 text-stone-100">
      <app-header [siteData]="siteConfig" />
      <router-outlet />
      <app-bottom-buttons [siteData]="siteConfig" />
      <app-footer [siteData]="siteConfig" />
    </div>
  `,
  styles: [],
})
export class App {
  siteConfig = siteData;
}
