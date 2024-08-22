import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselComponent } from '../objects/carousel/carousel.component';
import { PortfolioCardsComponent } from "../portfolio-cards/portfolio-cards.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PaginatorModule, CarouselComponent, PortfolioCardsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // corrected from 'styleUrl' to 'styleUrls'
})
export class HomeComponent {}


