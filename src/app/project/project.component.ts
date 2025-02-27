import { AfterViewInit, asNativeElements, Component, ElementRef, inject, ViewChild } from '@angular/core';
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

  @ViewChild('projScreen') myProj?: ElementRef;
  @ViewChild('techIcons') techIcons?: ElementRef;
  @ViewChild('techTitle') techTitle?: ElementRef;
  @ViewChild('projectLinks') projectLinks?: ElementRef;


  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.addAnimations();
          setTimeout(() => {
            this.removeAnimations();
          }, 1000);
        }
      });
    });

    const targetProjImg = document.querySelector("#projScreen");
    if (targetProjImg) {
      this.observer.observe(targetProjImg);
    }
  }

  observe = inject(ObserverService);
  projects = inject(ProjectsdataService);

  clicked: boolean[] = [true, false, false];

  selectProject(index: number, event: Event) {

    this.addClasstoTab(index);

    this.addAnimations();

    this.selectedProjectUpdate(index);

    setTimeout(() => {
      this.removeAnimations();
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


  addAnimations() {
    this.myProj?.nativeElement.classList.add('animate-proj-img');
    this.techIcons?.nativeElement.classList.add('animate-tech-img');
    this.techTitle?.nativeElement.classList.add('animate-tech-title');
    this.projectLinks?.nativeElement.classList.add('animate-link-tabs');
  }

  removeAnimations() {
    this.myProj?.nativeElement.classList.remove('animate-proj-img');
    this.techIcons?.nativeElement.classList.remove('animate-tech-img');
    this.techTitle?.nativeElement.classList.remove('animate-tech-title');
    this.projectLinks?.nativeElement.classList.remove('animate-link-tabs');
  }

  selectedProjectUpdate(index: number) {
    this.projects.projectDuration = this.projects.projects[index].duration;
    this.projects.projectDescription = this.projects.projects[index].description;
    this.projects.projectLearnProcess = this.projects.projects[index].learnProcess;
    this.projects.projectHeading = this.projects.projects[index].experience.heading;
    this.projects.projectDetails = this.projects.projects[index].experience.details;
    this.projects.projectImage = this.projects.projects[index].image;
    this.projects.projectTechnologies = this.projects.projects[index].technologies;
    this.projects.projectLink = this.projects.projects[index].link;
    this.projects.projectGithub = this.projects.projects[index].github;
    this.projects.index = index;
  }

}

