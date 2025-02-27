import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  observer!: IntersectionObserver;
  @ViewChild('ptag') pTag?: ElementRef;
  @ViewChild('ptag2') pTag2?: ElementRef;
  @ViewChild('ptag3') pTag3?: ElementRef;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((enteries) => {
      enteries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.addAnimations();
        } else {
          this.removeAnimations();
        }
      })
    })
    const aboutMe = document.querySelector("#aboutMe");
    if (aboutMe) {
      this.observer.observe(aboutMe);
    }
  }


  addAnimations() {
    this.pTag?.nativeElement.classList.add('animation');
    setTimeout(() => {
      this.pTag2?.nativeElement.classList.add('animation');
    }, 1600);
    setTimeout(() => {
      this.pTag3?.nativeElement.classList.add('animation');
    }, 3400);
  }


  removeAnimations() {
    this.pTag?.nativeElement.classList.remove('animation');
    this.pTag2?.nativeElement.classList.remove('animation');
    this.pTag3?.nativeElement.classList.remove('animation');
  }


}
