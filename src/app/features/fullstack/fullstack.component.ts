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
      title: 'HR and Product Management System',
      description: 'Employees can punch in and out while calculating the time with the hourly wage.',
      tags: ['React', 'NestJS', 'Tailwind', 'MySQL', 'PhpMyAdmin'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/Jacobwkidd',
    },
    {
      title: 'WordGame',
      description: 'Used observables.',
      tags: ['C#', 'TypeScript', 'Tailwind', 'CSS', 'JSON'],
      image: 'https://via.placeholder.com/300', // No image provided
      github: 'https://github.com/Jacobwkidd',
    },
    {
      title: 'HR and Product Management System',
      description: 'Employees can punch in and out while calculating the time with the hourly wage.',
      tags: ['React', 'NestJS', 'Tailwind', 'MySQL', 'PhpMyAdmin'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/Jacobwkidd',
    },
    {
      title: 'WordGame',
      description: 'Used observables.',
      tags: ['C#', 'TypeScript', 'Tailwind', 'CSS', 'JSON'],
      image: 'https://via.placeholder.com/300', // No image provided
      github: 'https://github.com/Jacobwkidd',
    },
  ];
}
