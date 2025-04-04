import { Component } from '@angular/core';
import { VariableService } from '../variable.service';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-privacy',
  standalone: true,
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
  imports: [NavBarComponent]
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
  

  constructor(public VariableService: VariableService
  ) { }
  
  tabClicked( value: string) {

    if (value == 'german') {
      this.VariableService.deutsch = true;
      this.VariableService.english = false;
    }

    if (value == 'english') {
      this.VariableService.deutsch = false;
      this.VariableService.english = true;
    }

  }

  toggleMenu(){
    console.log(`Test`);
    
  }

}
