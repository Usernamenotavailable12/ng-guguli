import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'] // corrected from 'styleUrl' to 'styleUrls'
})
export class ServicesComponent {}


