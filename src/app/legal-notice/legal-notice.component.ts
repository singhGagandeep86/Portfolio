import { Component } from '@angular/core';
import { VariableService } from '../variable.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  emailString = "mailto: tech@gagandeepsingh.de"

  constructor(public VariableService: VariableService) { }

}
