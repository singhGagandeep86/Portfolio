import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsdataService {

  constructor() { }

  projects = [
    {
      name: "Join",
      nameGerman: "Join",
      duration: 8,
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      descriptionGerman: "Task-Manager inspiriert vom Kanban-System. Aufgaben erstellen und organisieren mit Drag-and-Drop-Funktion, Nutzern und Kategorien zuweisen.",
      learnProcess: "I was responsible for the “Add Task” area and the Firebase integration. The code was structured into modular, well-named components. I organized my work using Kanban and regular standups. This kept the code maintainable, clean, and easy to extend.",
      learnProcessGerman: "Ich war für den „Add Task“-Bereich und die Firebase-Anbindung zuständig. Den Code habe ich in modulare, gut benannte Komponenten strukturiert. Mit Kanban und regelmäßigen Standups habe ich meine Arbeit organisiert. So blieb der Code wartbar, übersichtlich und leicht erweiterbar.",
      experience: {
        heading: "My group work experience",
        headingGerman: "Meine Erfahrungen mit Gruppenarbeit",
        details: "Our team consisted of 3 people, and my role was to create add Task section and work on firebase to save and edit all data. We worked closely together, ensuring great teamwork and smooth cooperation, which made the project both efficient and enjoyable.",
        detailsGerman: "In unserem 3-köpfigen Team war ich für den „Add Task“-Bereich und die Firebase-Anbindung zum Speichern und Bearbeiten der Daten verantwortlich. Die enge Zusammenarbeit sorgte für effizientes und angenehmes Arbeiten."
      },
      image: "./assets/Images/join.png",
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: "https://join-334.developerakademie.net/join/index.html",
      github: "https://github.com/Rusty-Alex/join"
    },
    {
      name: "El-Pollo-Loco",
      nameGerman: "El-Pollo-Loco",
      duration: 5,
      description: "A jump & run game with a twist. You can avoid small enemies by jumping or collect bottles and throw to kill but at the end Boss enemy should be also killed but only with throwing Bottles.",
      descriptionGerman: "Ein Jump-&-Run-Spiel mit einem Twist: Kleine Gegner kann man durch Springen ausweichen oder sie mit gesammelten Flaschen bewerfen und besiegen. Am Ende muss der Endgegner jedoch ausschließlich mit Flaschen geworfen werden, um ihn zu besiegen.",
      learnProcess: "I have learnt how to make a game using javascript with object oriented programming.",
      learnProcessGerman: "Ich habe gelernt, ein Spiel mit objektorientierter Programmierung in JavaScript zu entwickeln.",
      experience: {
        heading: "What I have learnt",
        headingGerman: "Lernerfahrungen",
        details: "Developing my jump & run game helped me improve my skills in object-oriented programming with JavaScript. I especially enjoyed implementing game mechanics like movement and collision in a structured way.",
        detailsGerman: "Durch die Entwicklung meines Jump-&-Run-Spiels konnte ich meine Fähigkeiten in objektorientierter Programmierung mit JavaScript verbessern. Besonders spannend war es, Spielmechaniken wie Bewegung und Kollisionen strukturiert umzusetzen."
      },
      image: "./assets/Images/pollo-loco.png",
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: "https://gagandeep-singh.developerakademie.net/el_Pollo_Loco/index.html",
      github: "https://github.com/singhGagandeep86/El-Pollo-Loco"
    },
    {
      name: "Ongoing Project",
      nameGerman: "Aktuelles Projekt",
      duration: 0,
      description: "DA Bubble will be a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
      descriptionGerman: "DA Bubble wird eine Slack-Clone-App. Sie revolutioniert die Teamkommunikation und Zusammenarbeit durch eine intuitive Benutzeroberfläche, Echtzeitnachrichten und eine starke Kanalorganisation.",
      learnProcess: "",
      learnProcessGerman: "",
      experience: {
        heading: "",
        headingGerman: "",
        details: "",
        detailsGerman: ""
      },
      image: "./assets/Images/comingProject.png",
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      link: "",
      github: ""
    }
  ]

  projectName: string = this.projects[0].name;
  projectNameGerman: string = this.projects[0].nameGerman;
  projectDuration: number = this.projects[0].duration;
  projectDescription: string = this.projects[0].description;
  projectDescriptionGerman: string = this.projects[0].descriptionGerman;
  projectLearnProcess: string = this.projects[0].learnProcess;
  projectLearnProcessGerman:string = this.projects[0].learnProcessGerman;
  projectHeading: string = this.projects[0].experience.heading;
  projectHeadingGerman: string = this.projects[0].experience.headingGerman;
  projectDetails: string = this.projects[0].experience.details;
  projectDetailsGerman: string = this.projects[0].experience.detailsGerman;
  projectImage: string = this.projects[0].image;
  projectTechnologies: string | string[] = this.projects[0].technologies;
  projectLink: string = this.projects[0].link;
  projectGithub: string = this.projects[0].github;
  index: number = 0;
}
