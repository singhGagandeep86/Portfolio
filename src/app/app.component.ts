import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillComponent } from "./my-skill/my-skill.component";
import { ProjectComponent } from "./project/project.component";
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, AboutMeComponent, MySkillComponent, ProjectComponent, ReferencesComponent, ContactComponent, RouterOutlet, FooterComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
