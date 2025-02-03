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
  @Input() title!: string;
  @Input() tags: string[] = [];
  @Input() image!: string;
  @Input() github!: string;
  @Input() description?: string;
  @Input() detailedDescription!: string;

  isModalOpen = false;

  // Function to open modal
  openModal() {
    this.isModalOpen = true;
  }

  // Function to close modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Automatically generate a short description if `description` is not provided
  getShortDescription(): string {
    if (this.description) {
      return this.description;
    }
    return this.detailedDescription.split('. ')[0] + '.';
  }
}
