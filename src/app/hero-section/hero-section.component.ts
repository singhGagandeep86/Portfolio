import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, ViewChild, DestroyRef, Inject, Renderer2 } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { VariableService } from '../variable.service';

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
  @ViewChild('mainBody') mainBody?: ElementRef;

  constructor(private BreakpointObserver: BreakpointObserver,
    public VariableService: VariableService,
    private destroyRef: DestroyRef,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2) { }


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


  tabClicked(value: string) {

    if (value == 'german') {
      this.VariableService.deutsch = true;
      this.VariableService.english = false;
    }

    if (value == 'english') {
      this.VariableService.deutsch = false;
      this.VariableService.english = true;
    }

  }

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
    this.renderer.addClass(this.document.body, 'no-scroll');
  }

  hideMobileNav() {
    this.mobileNavBar = false;
    this.picPart?.nativeElement.classList.remove('hide');
    this.mobileNav?.nativeElement.classList.remove('show');
    this.toggleIcon?.nativeElement.classList.remove('toggle-icon-clicked');
    this.renderer.removeClass(this.document.body, 'no-scroll');
  }

}
