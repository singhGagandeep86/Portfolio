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

  constructor( private http: HttpClient,
    public VariableService: VariableService,
    public router: Router,
    private renderer: Renderer2
  ){}

  contactData = {
    name: "",
    eMail: "",
    message: "",
    accepted: false
  }

  scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  mailTest = false;
  policyRead = false;

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

  toSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.contactData.accepted == true) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response: object) => {
            console.log(`test`, response);
            ngForm.resetForm();
          },
          error: (error: string) => {
            console.error(error);
          },
          complete: () => this.contactDone(),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      
      ngForm.resetForm();
    }
  }

  contactDone(){
    this.successMessage?.nativeElement.classList.add('show');
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  returnBack(){
    this.successMessage?.nativeElement.classList.remove('show');
    this.renderer.setStyle(document.body, 'overflow', 'scroll');
  }

}
