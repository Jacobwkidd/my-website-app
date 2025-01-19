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
      title: 'Phone Store',
      description: 'Responsive web platform built with Angular and styled using Tailwind CSS. It enables users to perform CRUD operations on phone data through seamless API communication, utilizing two-way data binding and a mock database for efficient and dynamic management.',
      tags: ['Angular', 'TypeScript', 'Tailwind', 'CSS', 'JSON'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/your-repo',
      detailedDescription: `A responsive web platform built with Angular and styled using Tailwind CSS, enabling users to perform CRUD operations on phone data through seamless API communication, two-way data binding, and a mock database for efficient management.`,
    },
    {
      title: 'Stock Market',
      description: 'The Stock Market Application is a full-stack web platform built with Angular and NestJS, designed to provide users with real-time stock market data. It features seamless API integration, dynamic data handling, and a clean, responsive user interface. This project highlights robust data fetching, modular design, and efficient backend communication.',
      tags: ['Angular', 'Nestjs', 'SQL'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/Jacobwkidd/WPwithDotnet/tree/main/UserLoginApp',
      detailedDescription:
      'This project includes features for managing employee punch-ins and outs, hourly wage calculation, and seamless integration with payroll systems.',
    },
    {
      title: 'HR and Product Management System',
      description: 'Employees can punch in and out while calculating the time with the hourly wage.',
      tags: ['React', 'NestJS', 'Tailwind', 'MySQL', 'PhpMyAdmin'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/Jacobwkidd',
      detailedDescription:
      'This project includes features for managing employee punch-ins and outs, hourly wage calculation, and seamless integration with payroll systems.',
    },
    {
      title: 'WordGame',
      description: 'Used observables.',
      tags: ['C#', 'TypeScript', 'Tailwind', 'CSS', 'JSON'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/Jacobwkidd',
      detailedDescription:
      'This project includes features for managing employee punch-ins and outs, hourly wage calculation, and seamless integration with payroll systems.',
    },
    {
      title: '2d Game',
      description: 'Employees can punch in and out while calculating the time with the hourly wage.',
      tags: ['p5.js', 'JavaScript', 'HTML'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/Jacobwkidd/Heavy-Weapons-demo',
      detailedDescription:
      'This project includes features for managing employee punch-ins and outs, hourly wage calculation, and seamless integration with payroll systems.',
    },
    {
      title: 'Web Programming with Dotnet',
      description: 'Employees can punch in and out while calculating the time with the hourly wage.',
      tags: ['Dotnet', 'C#', 'SQL'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/Jacobwkidd/WPwithDotnet/tree/main/UserLoginApp',
      detailedDescription:
      'This project includes features for managing employee punch-ins and outs, hourly wage calculation, and seamless integration with payroll systems.',
    },
    {
      title: 'This website',
      description: '',
      tags: ['Angular', 'TypeScript', 'Tailwind', 'CSS'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/your-repo',
      detailedDescription: `This Phone Store Management Application is a responsive web platform designed for seamless phone inventory management. Built with Angular and styled using Tailwind CSS, the application features robust API communication to facilitate real-time data exchange between the frontend and a mock database. It supports full CRUD (Create, Read, Update, Delete) operations, enabling users to efficiently manage phone records. Utilizing Angular's two-way data binding with [(ngModel)], the app ensures dynamic synchronization between the user interface and the backend, providing a smooth and interactive user experience. The application also prioritizes responsive design, ensuring usability across devices, and serves as a scalable solution for future integration with production-ready databases or advanced features.`,
    },
  ];
}
