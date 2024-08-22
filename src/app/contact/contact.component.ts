import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] // corrected from 'styleUrl' to 'styleUrls'
})
export class ContactComponent {}


