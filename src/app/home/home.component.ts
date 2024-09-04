import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselComponent } from '../objects/carousel/carousel.component';
import { PortfolioCardsComponent } from "../portfolio-cards/portfolio-cards.component";
import { ImageRotatorComponent } from '../image-rotator/image-rotator.component';
import { ArtworkComponent } from "../artwork/artwork.component";
import { CodeHighlightingComponent } from "../code-highlighting/code-highlighting.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PaginatorModule, CarouselComponent, PortfolioCardsComponent, ImageRotatorComponent, ArtworkComponent, CodeHighlightingComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // corrected from 'styleUrl' to 'styleUrls'
})
export class HomeComponent {}


