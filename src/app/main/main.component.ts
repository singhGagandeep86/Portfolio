import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillComponent } from "../my-skill/my-skill.component";
import { ProjectComponent } from "../project/project.component";
import { ReferencesComponent } from '../references/references.component';
import { ContactComponent } from '../contact/contact.component';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, AboutMeComponent, MySkillComponent, ProjectComponent, ReferencesComponent, ContactComponent, NavBarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
