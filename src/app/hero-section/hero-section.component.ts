import { ViewportScroller, CommonModule } from '@angular/common';
import { Component, Input, ElementRef, ViewChild, NgModule, DestroyRef } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { state } from '@angular/animations';

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
  mobileNavBar: boolean = false;

  @ViewChild('projectSection') projectSection?: ElementRef;
  @ViewChild('picPart') picPart?: ElementRef;
  @ViewChild('mobileNav') mobileNav?: ElementRef;
  @ViewChild('toggleIcon') toggleIcon?: ElementRef;

  constructor(private BreakpointObserver: BreakpointObserver,
    private destroyRef: DestroyRef) { }


  ngOnInit() {

    this.BreakpointObserver.observe('(min-width: 753px)')
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(state => {
        if (state.matches) {
          this.hideMobileNav();
        }
      })
  }


  // tabClicked(event: Event) {

  //   const clickedElement = event.target as HTMLElement;


  //   if (clickedElement.id == 'aboutMe') {
  //     this.aboutMeStatus = true;
  //     this.mySkillsStatus = false;
  //     this.projectsStatus = false;
  //     this.contactStatus = false;
  //   }

  //   if (clickedElement.id == 'mySkills') {
  //     this.aboutMeStatus = false;
  //     this.mySkillsStatus = true;
  //     this.projectsStatus = false;
  //     this.contactStatus = false;
  //   }

  //   if (clickedElement.id == 'projects') {
  //     this.aboutMeStatus = false;
  //     this.mySkillsStatus = false;
  //     this.projectsStatus = true;
  //     this.contactStatus = false;
  //   }

  //   if (clickedElement.id == 'contact') {
  //     this.aboutMeStatus = false;
  //     this.mySkillsStatus = false;
  //     this.projectsStatus = false;
  //     this.contactStatus = true;
  //   }

  //   if (clickedElement.id == 'german') {
  //     this.germanLangSelected = true;
  //     this.englishLangSelected = false;
  //   }

  //   if (clickedElement.id == 'english') {
  //     this.germanLangSelected = false;
  //     this.englishLangSelected = true;
  //   }


  // }

  toggleMenu() {

    if (!this.mobileNavBar) {
      this.showMobileNav();
      this.mobileNavBar = true;
    } else {
      this.hideMobileNav();
      this.mobileNavBar = false;
    }

  }

  showMobileNav() {
    this.picPart?.nativeElement.classList.add('hide');
    this.mobileNav?.nativeElement.classList.add('show');
    this.toggleIcon?.nativeElement.classList.add('toggle-icon-clicked');
  }

  hideMobileNav() {
    this.picPart?.nativeElement.classList.remove('hide');
    this.mobileNav?.nativeElement.classList.remove('show');
    this.toggleIcon?.nativeElement.classList.remove('toggle-icon-clicked');
  }

}
