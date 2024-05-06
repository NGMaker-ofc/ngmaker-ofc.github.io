import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AboutUs } from './about-us/about-us';
import { Hero } from './hero/hero';
import { Partners } from './partners/partners';
import { Portifolio } from './portifolio/portifolio';
import { Productions } from './productions/productions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Portifolio, AboutUs, Partners, Productions],
  template: `<div>
    <app-hero />
    <app-productions />
    <app-portifolio />
    <app-about-us />
    <app-partners />
  </div>`,
})
export default class Home {
  constructor(private title: Title) {
    this.title.setTitle('Home - NG Maker');
  }
}
