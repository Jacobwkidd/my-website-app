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
  @Input() title!: string;       // Title of the card
  @Input() description!: string; // Description or content
  @Input() imageUrl!: string;    // Image URL for the card
  @Input() tags!: string[];      // Tags or categories
}
