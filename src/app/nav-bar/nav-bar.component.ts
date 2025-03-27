import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariableService } from '../variable.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})


export class NavBarComponent {

  aboutMeStatus: boolean = false;
  mySkillsStatus: boolean = false
  projectsStatus: boolean = false;
  contactStatus: boolean = false;


  resetValue() {
    this.aboutMeStatus = false;
    this.mySkillsStatus = false
    this.projectsStatus = false;
    this.contactStatus = false;

  }

  @ViewChild('projectSection') projectSection?: ElementRef;

  tabClicked(value: string) {

    switch (value) {

      case 'aboutMe':
        this.resetValue();
        this.aboutMeStatus = true;
        break;

      case 'mySkills':
        this.resetValue();
        this.mySkillsStatus = true;
        break;

      case 'projects':
        this.resetValue();
        this.projectsStatus = true;
        break;

      case 'contact':
        this.resetValue();
        this.contactStatus = true;
        break;

      case 'german':

        this.VariableService.deutsch = true;
        this.VariableService.english = false;
        break;

      case 'english':
        this.VariableService.english = true;
        this.VariableService.deutsch = false;
        break;

    }

  }

  constructor(public VariableService: VariableService) { }

}
