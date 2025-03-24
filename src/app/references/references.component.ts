import { Component } from '@angular/core';
import { VariableService } from '../variable.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  constructor ( public VariableSerivce: VariableService ) {}

}
