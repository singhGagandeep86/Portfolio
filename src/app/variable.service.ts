import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {

  constructor() { }

  deutsch: boolean = localStorage.getItem('language') === 'deutsch' ? true : false;
  english: boolean = localStorage.getItem('language') === 'english' ? true : false;

}
