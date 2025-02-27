import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsdataService {

  constructor() { }

  projects = [
      {
        name: "Join",
        duration: "2 months",
        description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
        learnProcess: "How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
        experience: {
          heading: "My group work experience",
          details: "Our team consisted of 3 people, and my role was to create add Task section and work on firebase to save and edit all data. We worked closely together, ensuring great teamwork and smooth cooperation, which made the project both efficient and enjoyable."
        },
        image: "./assets/Images/join.png",
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: "https://join-334.developerakademie.net/join/index.html",
        github: "https://github.com/Rusty-Alex/join"
      },
      {
        name: "El-Pollo-Loco",
        duration: "5 Weeks",
        description: "A jump & run game with a twist. You can avoid small enemies by jumping or collect bottles and throw to kill but at the end Boss enemy should be also killed but only with throwing Bottles.",
        learnProcess: "I have learnt how to make a game using javascript with object oreinted programming.",
        experience: {
          heading: "What I have learnt",
          details: "As someone who is always trying to learn new technologies, you may have enjoyed working on this project because it allowed you to delve deep into a particular technology. Give details, such as the name of the framework or language you mean."
        },
        image: "./assets/Images/pollo-loco.png",
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: "https://gagandeep-singh.developerakademie.net/el_Pollo_Loco/index.html",
        github: "https://github.com/singhGagandeep86/El-Pollo-Loco"
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
}
