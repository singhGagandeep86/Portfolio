import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {

  constructor() { }

  deutsch: boolean = true;
  english: boolean = false;
}
