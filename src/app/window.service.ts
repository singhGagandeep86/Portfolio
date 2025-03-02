import { Injectable, ViewChild } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProjectComponent } from './project/project.component';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }

  @ViewChild( HeroSectionComponent ) heroSection!: HeroSectionComponent;
  @ViewChild( ProjectComponent) projectSection!: ProjectComponent;
 
  
  scrollToHeroSection(){
    // this.heroSection.scrollToTop();
    console.log(`test`);
    
  }
}
