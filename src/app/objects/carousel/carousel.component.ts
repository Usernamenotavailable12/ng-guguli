import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  slides = [
    { image: 'assets/images/products/image1.jpg', alt: 'Slide 1', text: 'Text for Slide 1 Text for Slide 1 Text for Slide 1 Text for Slide 1 Text for Slide 1 Text for Slide 1 Text for Slide 1' },
    { image: 'assets/images/products/image3.jpg', alt: 'Slide 2', text: 'Text for Slide 1 Text for Slide 1 Text for Slide 1 Text for Slide 1 Text for Slide 1 Text for Slide 1 Text for Slide 1' },
    { image: 'assets/images/products/image2.jpg', alt: 'Slide 3', text: 'Text for Slide 1 Text for Slide 1 Text for Slide 1 Text for Slide 1 Text for Slide 1 Text for Slide 1 Text for Slide 1' }
  ];
  slideIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => this.nextSlide(), 9000);
  }

  showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide: Element, index: number) => {
      (slide as HTMLElement).style.display = (index === this.slideIndex) ? 'block' : 'none';
    });
  }

  prevSlide() {
    this.slideIndex = (this.slideIndex > 0) ? this.slideIndex - 1 : this.slides.length - 1;
    this.showSlides();
  }

  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
    this.showSlides();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
