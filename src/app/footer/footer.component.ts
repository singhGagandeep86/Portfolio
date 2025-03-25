import { Component } from '@angular/core';
import { VariableService } from '../variable.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  emailString = "mailto: tech@gagandeepsingh.de"

  constructor(public VariableService: VariableService) { }

}
