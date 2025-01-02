import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title!: string; // Title of the card
  @Input() description!: string; // Description of the card
  @Input() tags!: string[]; // Tags array
  @Input() image: string | null = null; // Optional image URL
  @Input() github!: string; // Default GitHub link
  @Input() detailedDescription!: string;

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
