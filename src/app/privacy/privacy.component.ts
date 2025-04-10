import { Component, DestroyRef, ElementRef, ViewChild } from '@angular/core';
import { VariableService } from '../variable.service';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-privacy',
  standalone: true,
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
  imports: [NavBarComponent, CommonModule]
})
export class PrivacyComponent {


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


  constructor(public VariableService: VariableService,
    private breakpointObserver: BreakpointObserver,
    private destroyRef: DestroyRef
  ) { }

  ngOnInit() {
    this.breakpointObserver.observe('(min-width: 753px)')
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

  hideMobileNav() {
    this.mobileNav?.nativeElement.classList.remove('show');
    this.toggleIcon?.nativeElement.classList.remove('toggle-icon-clicked');
  }

  showMobileNav(){
    this.mobileNav?.nativeElement.classList.add('show');
    this.toggleIcon?.nativeElement.classList.add('toggle-icon-clicked');
  }

}
