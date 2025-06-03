import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeroComponent } from './hero/hero.component';
import { PartnersComponent } from './partners/partners.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { FeaturedComponent } from './featured/featured.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    PortifolioComponent,
    AboutUsComponent,
    PartnersComponent,
    FeaturedComponent,
  ],
  template: `<div>
    <app-hero />
    <app-featured />
    <app-portifolio />
    <app-about-us />
    <app-partners />
  </div>`,
})
export class HomeComponent {
  constructor(private title: Title) {
    this.title.setTitle('Home - NG Maker');
  }
}
