import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-fullstack',
  standalone: true,
  templateUrl: './fullstack.component.html',
  styleUrls: ['./fullstack.component.css'],
})
export class FullstackComponent implements OnInit {
  ngOnInit(): void {
    this.revealProjects();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.revealProjects();
  }

  private revealProjects(): void {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project) => {
      const rect = project.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        project.classList.add('visible');
      }
    });
  }
}
