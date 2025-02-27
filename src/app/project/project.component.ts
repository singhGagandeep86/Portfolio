import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverService } from '../observer.service';
import { ProjectsdataService } from '../projectsdata.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})



export class ProjectComponent implements AfterViewInit {

  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element ist sichtbar!", entry.target);
          entry.target.classList.add('animate-proj-img');
          setTimeout(() => {
            entry.target.classList.remove('animate-proj-img');
          }, 1000);
        } 
        // else {
        //   entry.target.classList.remove('animate-proj-img');
        // }
      });
    });

    const targetProjImg = document.querySelector("#projScreen");
    // const targetTechIcons = document.querySelector("#techIcons");
    // const targetTechTitle = document.querySelector("#techTitle");
    // const targetProjectLinks = document.querySelector("#projectLinks");
    if (targetProjImg) {
      this.observer.observe(targetProjImg);
    }
    // if (targetTechIcons) {
    //   this.observer.observe(targetTechIcons);
    // }
    // if (targetTechTitle) {
    //   this.observer.observe(targetTechTitle);
    // }
    // if (targetProjectLinks) {
    //   this.observer.observe(targetProjectLinks);
    // }

  }

  observe = inject(ObserverService);
  projects = inject(ProjectsdataService);

  clicked: boolean[] = [true, false, false];

  projectDuration: string = this.projects.projects[0].duration;
  projectDescription: string = this.projects.projects[0].description;
  projectLearnProcess: string = this.projects.projects[0].learnProcess;
  projectHeading: string = this.projects.projects[0].experience.heading;
  projectDetails: string = this.projects.projects[0].experience.details;
  projectImage: string = this.projects.projects[0].image;
  projectTechnologies: string | string[] = this.projects.projects[0].technologies;
  projectLink: string = this.projects.projects[0].link;
  projectGithub: string = this.projects.projects[0].github;
  index: number = 0;

  @ViewChild('projScreen') myProj?: ElementRef;
  @ViewChild('techIcons') techIcons?: ElementRef;
  @ViewChild('techTitle') techTitle?: ElementRef;
  @ViewChild('projectLinks') projectLinks?: ElementRef;

  selectProject(index: number, event: Event) {

    this.addClasstoTab(index);

    this.myProj?.nativeElement.classList.add('animate-proj-img');
    this.techIcons?.nativeElement.classList.add('animate-tech-img');
    this.techTitle?.nativeElement.classList.add('animate-tech-title');
    this.projectLinks?.nativeElement.classList.add('animate-link-tabs');

    this.projectDuration = this.projects.projects[index].duration;
    this.projectDescription = this.projects.projects[index].description;
    this.projectLearnProcess = this.projects.projects[index].learnProcess;
    this.projectHeading = this.projects.projects[index].experience.heading;
    this.projectDetails = this.projects.projects[index].experience.details;
    this.projectImage = this.projects.projects[index].image;
    this.projectTechnologies = this.projects.projects[index].technologies;
    this.projectLink = this.projects.projects[index].link;
    this.projectGithub = this.projects.projects[index].github;
    this.index = index;

    setTimeout(() => {
      this.myProj?.nativeElement.classList.remove('animate-proj-img');
      this.techIcons?.nativeElement.classList.remove('animate-tech-img');
      this.techTitle?.nativeElement.classList.remove('animate-tech-title');
      this.projectLinks?.nativeElement.classList.remove('animate-link-tabs');
    }, 1000);

  }


  addClasstoTab(index: number) {
    this.clicked = [false, false, false];

    switch (index) {

      case 0:
        this.clicked[0] = true;

        break;

      case 1:
        this.clicked[1] = true;
        break;

      case 2:
        this.clicked[2] = true;
        break;

    }
  }


}

