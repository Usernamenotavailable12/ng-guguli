import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-cards',
  standalone: true, // This line marks the component as standalone
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './portfolio-cards.component.html',
  styleUrls: ['./portfolio-cards.component.scss']
})
export class PortfolioCardsComponent implements OnInit {
  portfolioItems = [
    {
      background: 'assets/images/background1.svg',
      image: 'assets/images/project1.png',
      title: 'Photoshop Professional Badge',
      link: 'https://drive.google.com/file/d/1_6vOyL9AejLOUpZD79DJ0UhB6-CCAKji/view'
    },
    {
      background: 'assets/images/background3.svg',
      image: 'assets/images/project3.png',
      title: 'Random Password Generator',
      link: 'https://manypass.netlify.app'
    },
    {
      background: 'assets/images/background4.svg',
      image: 'assets/images/project4.png',
      title: 'Behance',
      link: 'https://www.behance.net/gugadzneladze2000'
    },
    {
      background: 'assets/images/background1.svg',
      image: 'assets/images/project2.png',
      title: 'AlphaBet Project',
      link: 'https://alpha-bet.netlify.app'
    }
    // Add more items as needed
  ];

  constructor() {}

  ngOnInit() {
    // Initialize scroll animation
    this.updateAnimations();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateAnimations();
  }

  navigateTo(link: string) {
    window.open(link, '_blank');
  }

  private updateAnimations() {
    const sections = document.querySelectorAll('.portfolio-section');
    const scrollPosition = window.pageYOffset;

    sections.forEach((section) => {
      const offset = section.getBoundingClientRect().top + window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrollPosition >= offset - screenHeight / 1.5 && scrollPosition < offset + screenHeight / 1.5) {
        section.classList.add('in-view');
      } else {
        section.classList.remove('in-view');
      }
    });
  }
}
