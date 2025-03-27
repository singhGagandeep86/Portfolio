import { Component } from '@angular/core';
import { VariableService } from '../variable.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  emailString = "mailto: tech@gagandeepsingh.de"

  constructor(public VariableService: VariableService,
    public router: Router,
  ) { }

}
