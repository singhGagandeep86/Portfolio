import { ViewportScroller, CommonModule } from '@angular/common';
import { Component, Input, ElementRef, ViewChild, NgModule } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})

export class HeroSectionComponent {
  scrollDown() {

    window.scrollTo({ top: 896, behavior: 'smooth' });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  emailString = "mailto: tech@gagandeepsingh.de"


  aboutMeStatus: boolean = false;
  mySkillsStatus: boolean = false
  projectsStatus: boolean = false;
  contactStatus: boolean = false;
  germanLangSelected: boolean = false;
  englishLangSelected: boolean = true;

  @ViewChild('projectSection') projectSection?: ElementRef;
  @ViewChild('picPart') picPart?: ElementRef;
  @ViewChild('mobileNav') mobileNav?: ElementRef;
  @ViewChild('toggleIcon') toggleIcon?: ElementRef;

  constructor(private BreakpointObserver: BreakpointObserver) { }

  tabClicked(event: Event) {

    const clickedElement = event.target as HTMLElement;


    if (clickedElement.id == 'aboutMe') {
      this.aboutMeStatus = true;
      this.mySkillsStatus = false;
      this.projectsStatus = false;
      this.contactStatus = false;
    }

    if (clickedElement.id == 'mySkills') {
      this.aboutMeStatus = false;
      this.mySkillsStatus = true;
      this.projectsStatus = false;
      this.contactStatus = false;
    }

    if (clickedElement.id == 'projects') {
      this.aboutMeStatus = false;
      this.mySkillsStatus = false;
      this.projectsStatus = true;
      this.contactStatus = false;
    }

    if (clickedElement.id == 'contact') {
      this.aboutMeStatus = false;
      this.mySkillsStatus = false;
      this.projectsStatus = false;
      this.contactStatus = true;
    }

    if (clickedElement.id == 'german') {
      this.germanLangSelected = true;
      this.englishLangSelected = false;
    }

    if (clickedElement.id == 'english') {
      this.germanLangSelected = false;
      this.englishLangSelected = true;
    }


  }

  toggleMenu() {
    this.picPart?.nativeElement.classList.toggle('hide');
    this.mobileNav?.nativeElement.classList.toggle('show');
    this.toggleIcon?.nativeElement.classList.toggle('toggle-icon-clicked');
  }

}
