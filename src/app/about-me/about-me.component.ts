import { Component, ElementRef, ViewChild } from '@angular/core';
import { VariableService } from '../variable.service';

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

  locationImage: HTMLImageElement | null = null;
  remoteImage: HTMLImageElement | null = null;
  challengeImage: HTMLImageElement | null = null;

  constructor ( public VariableService: VariableService ){}

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

    this.pTag?.nativeElement.parentElement.firstChild.classList.add('apear-from-left');
    setTimeout(() => {
      this.pTag?.nativeElement.classList.add('animation');
    }, 400);
    setTimeout(() => {
      this.pTag2?.nativeElement.parentElement.firstChild.classList.add('apear-from-left');
    }, 2000);
    setTimeout(() => {
      this.pTag2?.nativeElement.classList.add('animation');
    }, 2600);
    setTimeout(() => {
      this.pTag3?.nativeElement.parentElement.firstChild.classList.add('apear-from-left');
    }, 3800);

    setTimeout(() => {
      this.pTag3?.nativeElement.classList.add('animation');
    }, 4200);
  }


  removeAnimations() {
    this.pTag?.nativeElement.parentElement.firstChild.classList.remove('apear-from-left');
    this.pTag2?.nativeElement.parentElement.firstChild.classList.remove('apear-from-left');
    this.pTag3?.nativeElement.parentElement.firstChild.classList.remove('apear-from-left');
    this.pTag?.nativeElement.classList.remove('animation');
    this.pTag2?.nativeElement.classList.remove('animation');
    this.pTag3?.nativeElement.classList.remove('animation');
  }


}
