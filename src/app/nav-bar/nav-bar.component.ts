import { Component, ElementRef, ViewChild, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariableService } from '../variable.service';
import { Router } from '@angular/router';


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
        localStorage.setItem('language', 'deutsch');
      },
      english: () => {
        this.VariableService.english = true;
        this.VariableService.deutsch = false;
        localStorage.setItem('language', 'english');
      }
      
    };
  
    statusMap[value]?.();
    
  }

  constructor(public VariableService: VariableService,
    private router: Router
  ) { }


}
