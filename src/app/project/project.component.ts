import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects = [
    {
      name: "Join",
      duration: "2 months",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      learnProcess: "How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
      experience: {
        heading: "My group work experience",
        details: "Our team consisted of [X] people, and my role was [your role]. I was responsible for briefly describe your tasks]. We worked closely together, ensuring great teamwork and smooth cooperation, which made the project both efficient and enjoyable."
      },
      image: "./assets/Images/join.png",
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: "",
      github: ""
    },
    {
      name: "El-Pollo-Loco",
      duration: "5 Weeks",
      description: "A jump & run game with a twist. You can avoid small enemies by jumping or collect bottles and throw to kill but at the end Boss enemy should be also killed but only with throwing Bottles.",
      learnProcess: "I have learnt how to make a game sing javascript with object oreinted programming.",
      experience: {
        heading: "What I have learnt",
        details: "As someone who is always trying to learn new technologies, you may have enjoyed working on this project because it allowed you to delve deep into a particular technology. Give details, such as the name of the framework or language you mean."
      },
      image: "./assets/Images/pollo-loco.png",
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: "",
      github: ""
    },
    {
      name: "Ongoing Project",
      duration: "",
      description: "DA Bubble will be a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
      learnProcess: "",
      experience: {
        heading: "",
        details: ""
      },
      image: "./assets/Images/comingProject.png",
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      link: "",
      github: ""
    }
  ]

  projectDuration: string = this.projects[0].duration;
  projectDescription: string = this.projects[0].description;
  projectLearnProcess: string = this.projects[0].learnProcess;
  projectHeading: string = this.projects[0].experience.heading;
  projectDetails: string = this.projects[0].experience.details;
  projectImage: string = this.projects[0].image;
  projectTechnologies: string | string[]= this.projects[0].technologies;
  projectLink: string = this.projects[0].link;
  projectGithub: string = this.projects[0].github;


  selectProject(index: number) {

    this.projectDuration = this.projects[index].duration;
    this.projectDescription = this.projects[index].description;
    this.projectLearnProcess = this.projects[index].learnProcess;
    this.projectHeading = this.projects[index].experience.heading;
    this.projectDetails = this.projects[index].experience.details;
    this.projectImage = this.projects[index].image;
    this.projectTechnologies = this.projects[index].technologies;
    this.projectLink = this.projects[index].link;
    this.projectGithub = this.projects[index].github;

  }

}

