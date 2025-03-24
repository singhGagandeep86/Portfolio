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

  @ViewChild('projectSection') projectSection?: ElementRef;

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
      this.VariableService.deutsch = true;
      this.VariableService.english = false;
    }

    if (clickedElement.id == 'english') {
      this.VariableService.english = true;
      this.VariableService.deutsch = false;
    }

  }

  constructor(public VariableService: VariableService) { }

}
