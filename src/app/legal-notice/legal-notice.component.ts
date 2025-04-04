import { Component } from '@angular/core';
import { VariableService } from '../variable.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [ NavBarComponent ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  emailString = "mailto: tech@gagandeepsingh.de"

  constructor(public VariableService: VariableService) { }

}
