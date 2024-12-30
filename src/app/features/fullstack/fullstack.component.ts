import { Component } from '@angular/core';

@Component({
  selector: 'app-fullstack',
  standalone: true,
  imports: [],
  templateUrl: './fullstack.component.html',
  styleUrls: ['./fullstack.component.css'],
})
export class FullstackComponent {
  projects = [
    {
      title: 'StockStream',
      description: 'A real-time stock-trading and portfolio management web application.',
      imageUrl: '/api/placeholder/400/200',
      tags: ['Angular', 'Node', 'Express', 'MongoDB', 'Bootstrap'],
      githubLink: 'https://github.com/example/stockstream',
      liveDemoLink: 'https://stockstream.example.com',
    },
    {
      title: 'Ideate Forum',
      description: 'A social community where individuals can explore different ideas and put forth their unique content.',
      imageUrl: '/api/placeholder/400/200',
      tags: ['Django', 'SQLite', 'Python', 'Bootstrap', 'jQuery'],
      githubLink: 'https://github.com/example/ideateforum',
      liveDemoLink: 'https://ideateforum.example.com',
    },
    {
      title: 'MoodMelody',
      description: 'A tool that automatically generates chord progressions based on user input.',
      imageUrl: '/api/placeholder/400/200',
      tags: ['VueJS', 'Flask', 'SQLite', 'ToneJS', 'Bulma'],
      githubLink: 'https://github.com/example/moodmelody',
      liveDemoLink: 'https://moodmelody.example.com',
    },
  ];
}
