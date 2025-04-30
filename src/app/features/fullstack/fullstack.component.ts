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
      image: '../../../assets/Projects/Inventory System.png',
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
      tags: ['Vue', 'JavaScript', 'Tailwind', 'HTML', 'CSS'],
      image: '../../../assets/Projects/Rental.png',
      github: 'https://github.com/Jacobwkidd/vue-final-project.git',
      detailedDescription: 'The Rental Property Management System is a web application developed using Vue, JavaScript, Tailwind CSS, HTML, and CSS. This platform allows users to search for apartments or houses by location, filter listings based on price and property type (such as duplexes, single-family homes, and more), and easily find rental opportunities that meet their needs. Landlords have the ability to post rental properties or list homes for sale directly through the system. Additionally, tenants can securely pay rent online if their landlord opts to use the platform’s integrated payment system. This project showcases my ability to build responsive, user-friendly applications with advanced filtering, search functionality, and real-world e-commerce capabilities.',
    },
    {
      "title": "WordGame",
      "tags": ["C#", ".NET", "TypeScript", "Tailwind", "CSS", "JSON"],
      "image": "https://via.placeholder.com/300",
      "github": "https://github.com/Jacobwkidd/WordGame",
      "detailedDescription": "WordGame is an interactive, real-time word guessing application built with a .NET backend and a TypeScript frontend. Players input letter guesses, which are transmitted to the server via JSON. The .NET server validates each guess by checking it against the target word and responds with immediate feedback indicating if the guess is correct. This real-time data exchange creates a smooth and engaging user experience. The frontend is styled with Tailwind CSS to ensure a modern, responsive design. This project showcases real-time server communication, dynamic client updates, efficient state management, and full-stack development with C#, .NET, and modern web technologies."
    },    
    {
      title: 'Web Programming with Dotnet',
      tags: ['Dotnet', 'Angular', 'TypeScript', 'Tailwind', 'SQL'],
      image: '../../../assets/Projects/movies.png',
      github: 'https://github.com/Jacobwkidd/WPwithDotnet',
      detailedDescription:
      'This project is a full-stack web application built using Dotnet, Angular, and C#. It connects to the TMDB (The Movie Database) API to retrieve and display real-time data for movies and TV shows. Users can easily browse and filter content by categories such as Now Playing, Top Rated, and Popular. The backend, developed in Dotnet with C#, manages API requests and processes data efficiently, while the frontend, powered by Angular, provides a clean, responsive user interface. This project highlights my skills in API integration, dynamic content rendering, and full-stack development using modern frameworks and languages.',
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
      tags: ['JavaScript','HTML', 'CSS'],
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
