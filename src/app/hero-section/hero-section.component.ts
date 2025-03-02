import { ViewportScroller } from '@angular/common';
import { Component, Input, ElementRef } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})

export class HeroSectionComponent {
  scrollDown() {

    window.scrollTo({ top: 896, behavior: 'smooth' });
  }

  scrollToTop(){
    window.scrollTo({ top:0, behavior: 'smooth'});
  }

  emailString = "mailto: tech@gagandeepsingh.de"


}
