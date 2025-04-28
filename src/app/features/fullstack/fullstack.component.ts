import { Component, EventEmitter, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../../shared/tabs/tabs.component';

@Component({
  selector: 'app-fullstack',
  standalone: true,
  imports: [CardComponent, CommonModule, TabsComponent],
  templateUrl: './fullstack.component.html',
  styleUrls: ['./fullstack.component.css'],
})
export class FullstackComponent {
  selectedLanguage = 'All';
  projects = [
    
    {
      title: 'Stock Market',
      tags: ['Angular', 'NestJS', 'SQL', 'PostgreSQL'],
      image: '../../../assets/Projects/StockPulse.png',
      github: 'https://github.com/Jacobwkidd/Stock-Market-App',
      detailedDescription:
        'The Stock Market app is a full-stack trading simulation platform built with Angular, NestJS, and PostgreSQL. It allows users to create an account, securely log in and out, transfer funds into their portfolio, and perform simulated stock trades. Using live data from the Yahoo Finance API, users can search for stocks, view REAL-TIME prices, buy and sell shares, and track their portfolio performance. The backend ensures secure transaction handling and maintains detailed records of user balances, stock holdings, and trade history. This project demonstrates real-world features like authentication, financial transaction processing, external API integration, and relational database management.',
    },
    {
      title: 'Inventory Management System',
      tags: ['React', 'NestJS', 'Tailwind', 'MySQL'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/Jacobwkidd/inventory-system.git',
      detailedDescription:
      'This project includes features for managing employee punch-ins and outs, hourly wage calculation, and seamless integration with payroll systems.',
    },
    {
      title: 'This Website',
      tags: ['Angular', 'TypeScript', 'Tailwind', 'CSS'],
      image: '../../../assets/Projects/MyWebsite.png',
      github: 'https://github.com/Jacobwkidd/my-website-app.git',
      detailedDescription: `I like this interactive and responsive design showcased in this modern portfolio platform, which highlights a collection of professional full-stack development projects. Built with Angular and styled using Tailwind CSS, the website emphasizes clean design, dynamic content, and user-friendly interfaces that work seamlessly across devices. Serving as a central hub for sharing expertise in web and software development, it demonstrates technical proficiency and creative problem-solving skills. With a future-ready architecture, the platform is designed for scalability, allowing effortless addition of new projects and features. Its robust technology stack, including Angular for dynamic interfaces, Tailwind CSS for sleek styling, and TypeScript for type safety, ensures a cutting-edge and maintainable foundation for showcasing development work.`,
    },
    {
      title: 'Rental Property Management System',
      tags: ['Tailwind', 'Vue', 'JavaScript', 'HTML', 'CSS'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/Jacobwkidd/Heavy-Weapons-demo',
      detailedDescription:
      'This project includes features for managing employee punch-ins and outs, hourly wage calculation, and seamless integration with payroll systems.',
    },
    {
      title: 'WordGame',
      tags: ['C#', 'TypeScript', 'Tailwind', 'CSS', 'JSON'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/Jacobwkidd/WordGame',
      detailedDescription:
      'This project includes features for managing employee punch-ins and outs, hourly wage calculation, and seamless integration with payroll systems.',
    },
    {
      title: 'Web Programming with Dotnet',
      tags: ['Dotnet', 'C#', 'SQL'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/Jacobwkidd/WPwithDotnet/tree/main/UserLoginApp',
      detailedDescription:
      'This project includes features for managing employee punch-ins and outs, hourly wage calculation, and seamless integration with payroll systems.',
    },
    {
      title: 'Phone Store',
      tags: ['Angular', 'TypeScript', 'Tailwind', 'CSS', 'JSON'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/Jacobwkidd/phone-store.git',
      detailedDescription: `A responsive web platform built with Angular and styled using Tailwind CSS, enabling users to perform CRUD operations on phone data through seamless API communication, two-way data binding, and a mock database for efficient management.`,
    },
    {
      title: '2d Game',
      tags: ['p5.js', 'JavaScript', 'HTML'],
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com/Jacobwkidd/Heavy-Weapons-demo',
      detailedDescription:
      'This project includes features for managing employee punch-ins and outs, hourly wage calculation, and seamless integration with payroll systems.',
    }
  ];

  generateShortDescription(detailedDescription: string): string {
    return detailedDescription.split('.').slice(0, 1).join('.') + '...';
  }


  filteredProjects = [...this.projects]; // Show all projects initially

  selectLanguage(language: string) {
    this.selectedLanguage = language;

    if (language === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.tags.includes(language)
      );
    }
  }
}
