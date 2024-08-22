import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-image-rotator',
  templateUrl: './image-rotator.component.html',
  styleUrls: ['./image-rotator.component.scss'],
  standalone: true
})
export class ImageRotatorComponent implements AfterViewInit {

  currdeg: number = 0;

  constructor() { }

  ngAfterViewInit(): void {
    const nextButton = document.querySelector(".next") as HTMLElement;
    const prevButton = document.querySelector(".prev") as HTMLElement;
    const carousel = document.querySelector(".carousel") as HTMLElement;

    nextButton.addEventListener("click", () => this.rotate("n", carousel));
    prevButton.addEventListener("click", () => this.rotate("p", carousel));
  }

  rotate(direction: string, carousel: HTMLElement) {
    if (direction === "n") {
      this.currdeg -= 60;
    } else if (direction === "p") {
      this.currdeg += 60;
    }
    carousel.style.transform = `rotateY(${this.currdeg}deg)`;
  }
}
