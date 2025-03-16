import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css'],
  standalone: true,
  imports: [CommonModule] 
})
export class ScrollerComponent {
  logos = [
    { name: 'JavaScript', src: '../../../assests/js.png' },
    { name: 'Python', src: 'assets/python.png' },
    { name: 'C#', src: 'assets/c-sharp.png' },
    { name: 'Java', src: 'assets/java.png' },
    { name: 'PHP', src: 'assets/php-code.png' },
    { name: 'TypeScript', src: 'assets/typescript.png' },
    { name: 'Angular', src: 'assets/angular.png' },
    { name: 'React', src: 'assets/react.png' },
    { name: 'SQL', src: 'assets/sql-server.png' },
  ];
}
  
