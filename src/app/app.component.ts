import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { siteData } from '../siteData';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WhatsAppButtonComponent } from './components/whats-app-button/whats-app-button.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    WhatsAppButtonComponent,
  ],
  template: `
    <div class="dark:bg-stone-950 dark:text-stone-100">
      <app-header [siteData]="siteConfig" />
      <router-outlet />
      <app-whats-app-button [siteData]="siteConfig" />
      <app-footer [siteData]="siteConfig" />
    </div>
  `,
  styles: [],
})
export class AppComponent {
  siteConfig = siteData;
}
