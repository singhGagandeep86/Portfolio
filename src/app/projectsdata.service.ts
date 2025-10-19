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
      description: "Task manager inspired by the Kanban System. Manage tasks, users, and categories, with a secure drag & drop image upload feature.",
      descriptionGerman: "Aufgabenmanager, inspiriert vom Kanban-System. Verwalte Aufgaben, Benutzer und Kategorien mit einer sicheren Drag-&-Drop-Bild-Upload-Funktion.",
      learnProcess: "I was responsible for the “Add Task” area and the Firebase integration during the team project. I structured the code into clean, modular components and organized my work using Kanban. Afterwards, I independently developed the image upload with drag & drop functionality and improved the overall performance and usability.",
      learnProcessGerman: "Ich war für den Bereich „Aufgabe hinzufügen“ und die Firebase-Integration verantwortlich. Dabei habe ich den Code in klare, modulare Komponenten gegliedert und meine Arbeit mit Kanban organisiert. Anschließend entwickelte ich eigenständig die Drag-&-Drop-Bild-Upload-Funktion und verbesserte die Struktur und Benutzerfreundlichkeit des Projekts.",
      experience: {
        heading: "My group work experience",
        headingGerman: "Meine Erfahrungen mit Gruppenarbeit",
        details: "Our team had three members. I was responsible for the “Add Task” section and Firebase integration. We worked closely together, ensuring smooth collaboration. Afterwards, I independently developed the drag & drop image upload and improved the project’s performance and usability.",
        detailsGerman: "Unser Team bestand aus drei Personen. Ich war für „Aufgabe hinzufügen“ und Firebase verantwortlich. Wir arbeiteten eng zusammen. Danach entwickelte ich die Drag-&-Drop-Bild-Upload-Funktion und verbesserte Leistung und Benutzerfreundlichkeit."
      },
      image: "./assets/Images/join.png",
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: "https://join.gagandeepsingh.de/index.html",
      github: "https://github.com/singhGagandeep86/JoinPlus"
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
      name: "DABubble",
      nameGerman: "DABubble",
      duration: 6,
      description: "DaBubble is a modern chat app for teams, similar to Slack. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization. Irrespective of whether on a computer or a smartphone.",
      descriptionGerman: "DaBubble ist eine moderne Chat-App für Teams, ähnlich wie Slack. Die Anwendung hat ein intuitives Design, damit sich Nutzer schnell zurechtfinden. Man kann in Echtzeit schreiben, zwischen Kanälen wechseln und direkt mit Kollegen chatten, auf Desktop wie mobil.",
      learnProcess: "In the project, I developed the dashboard together with one team member, implementing the search function. Additionally, I independently created the thread messaging system and implemented the responsive design of the dashboard for different screen sizes.",
      learnProcessGerman: "In dem Projekt habe ich zusammen mit einem Teammitglied das Dashboard entwickelt und dabei die Suchfunktion umgesetzt. Außerdem habe ich alleine das Thread-Messaging realisiert und das responsive Design des Dashboard selbstständig für verschiedene Bildschirmgrößen umgesetzt.",
      experience: {
        heading: "Teamwork & Challenges",
        headingGerman: "Teamarbeit & Herausforderungen",
        details: "We built the project as a team of three using Angular, Firebase, TypeScript, and SCSS. The app includes many small features, which made the development more complex. One key challenge was working on the dashboard at the same time without code conflicts. We also planned and implemented the Firestore data structure (e.g. for messages and threads) together.",
        detailsGerman: "Wir haben das Projekt im Dreierteam mit Angular, Firebase, TypeScript und SCSS umgesetzt. Die App enthält viele kleine Funktionen, was die Umsetzung anspruchsvoller gemacht hat. Eine besondere Herausforderung war das gleichzeitige Arbeiten am Dashboard ohne Codekonflikte. Auch die Struktur der Daten in Firestore (z.B. für Nachrichten und Threads) haben wir gemeinsam geplant und umgesetzt."
      },
      image: "./assets/Images/DABubble.png",
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      link: "https://da-bubble.gagandeepsingh.de/index.html",
      github: "https://github.com/singhGagandeep86/DA-Bubble"
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
