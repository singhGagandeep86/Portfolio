import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {

  constructor() { }

  deutsch: boolean = false;
  english: boolean = true;
}
