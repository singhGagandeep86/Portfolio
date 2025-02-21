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

  // @Input() aboutMe: AboutMeComponent | undefined;

  scrollDown() {

    window.scrollTo({ top: 896, behavior: 'smooth' });
    // const aboutMeElement = this.aboutMe.elementRef.nativeElement;
    // window.scrollTo({top: aboutMeElement.offsetTop, behavior: 'smooth'});
  }




  // constructor(public scroller: ViewportScroller, public elementRef: ElementRef) {

  // }

}
