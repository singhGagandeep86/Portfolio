import { Component } from '@angular/core';
import { VariableService } from '../variable.service';

@Component({
  selector: 'app-my-skill',
  standalone: true,
  imports: [],
  templateUrl: './my-skill.component.html',
  styleUrl: './my-skill.component.scss'
})
export class MySkillComponent {

  constructor ( public VariableService: VariableService ){}

}
