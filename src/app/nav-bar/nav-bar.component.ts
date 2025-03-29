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
    this.resetValue?.();

    const statusMap: { [key: string]: () => void } = {
      aboutMe: () => this.aboutMeStatus = true,
      mySkills: () => this.mySkillsStatus = true,
      projects: () => this.projectsStatus = true,
      contact: () => this.contactStatus = true,
      german: () => {
        this.VariableService.deutsch = true;
        this.VariableService.english = false;
      },
      english: () => {
        this.VariableService.english = true;
        this.VariableService.deutsch = false;
      }
      
    };
  
    statusMap[value]?.();
    
  }

  constructor(public VariableService: VariableService) { }

}
