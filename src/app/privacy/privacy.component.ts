import { Component } from '@angular/core';
import { VariableService } from '../variable.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
  imports: []
})
export class PrivacyComponent {

  constructor ( public VariableService: VariableService ){}

}
