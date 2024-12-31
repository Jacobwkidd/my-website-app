import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fullstack',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './fullstack.component.html',
  styleUrls: ['./fullstack.component.css'],
})
export class FullstackComponent {
  projects = [
    {
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      imageUrl: 'https://via.placeholder.com/150',
      tags: ['Angular', 'TypeScript', 'TailwindCSS'],
    },
    {
      title: 'Project 2',
      description: 'This is a description of Project 2.',
      imageUrl: 'https://via.placeholder.com/150',
      tags: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      imageUrl: 'https://via.placeholder.com/150',
      tags: ['Angular', 'TypeScript', 'TailwindCSS'],
    },
    {
      title: 'Project 2',
      description: 'This is a description of Project 2.',
      imageUrl: 'https://via.placeholder.com/150',
      tags: ['Node.js', 'Express', 'MongoDB'],
    },
  ];
}
