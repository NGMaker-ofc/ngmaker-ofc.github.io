import { Component } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeroComponent } from './hero/hero.component';
import { PartnersComponent } from './partners/partners.component';
import { PortifolioComponent } from './portifolio/portifolio.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    PortifolioComponent,
    AboutUsComponent,
    PartnersComponent,
  ],
  template: `<div>
    <app-hero />
    <app-portifolio />
    <app-about-us />
    <app-partners />
  </div>`,
})
export class HomeComponent {}
