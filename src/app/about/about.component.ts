import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'] // corrected from 'styleUrl' to 'styleUrls'
})
export class AboutComponent {}