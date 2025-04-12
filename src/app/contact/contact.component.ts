import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VariableService } from '../variable.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, RouterLink, RouterLinkActive],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @ViewChild('successMessage') successMessage?: ElementRef;
  @ViewChild('check') check?: ElementRef;

  constructor(private http: HttpClient,
    public VariableService: VariableService,
    public router: Router,
    private renderer: Renderer2
  ) { }

  contactData = {
    name: "",
    eMail: "",
    message: "",
    accepted: false
  }

  scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  policyRead = false;
  mailKeyEnter = false;
  nameKeyEnter = false;
  messageKeyEnter = false;

  post = {
    endPoint: 'https://gagandeepsingh.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  detectKeyboard(event: Event, value: string){
    (this as any)[value + 'KeyEnter'] = true;
    console.log((this as any)[value + 'KeyEnter']);
    
  }

  toSubmit(ngForm: NgForm) {

    if (ngForm.submitted && ngForm.form.valid && this.contactData.accepted == true) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: () => {
            this.contactDone();
            ngForm.resetForm();
          },
          error: (error: string) => {
            console.error(error);
          }
        });
    } 
  }

  contactDone() {
    this.successMessage?.nativeElement.classList.add('show');
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.check!.nativeElement.checked = false;
    setTimeout(() => {
      this.returnBack();
    }, 2000);
    setTimeout(() => {
      this.scrollUp();
    }, 2000);
  }

  returnBack() {
    this.successMessage?.nativeElement.classList.remove('show');
    this.renderer.setStyle(document.body, 'overflow', 'scroll');
    this.contactData.accepted = false;
  }

}
