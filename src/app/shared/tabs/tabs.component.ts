import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements AfterViewInit {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  @Output() selectedLanguageChange = new EventEmitter<string>(); 

  
  languages = [
    { name: 'All' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'C#' },
    { name: 'Angular' },
    { name: 'React' },
    { name: 'SQL' }
  ];

  selectedLanguage = 'All';
  isDragging = false;
  startX = 0;
  scrollLeft = 0;
  velocity = 0;
  momentumID: any;
  lastMoveTime = 0;
  showLeftShadow = false; // ✅ Fixed missing property
  showRightShadow = false; // ✅ Fixed missing property

  ngAfterViewInit() {
    this.checkScroll();
  }
  selectLanguage(language: string) { // ✅ Corrected function name
    this.selectedLanguage = language;
    this.selectedLanguageChange.emit(language); // ✅ Emits only a string
  }


  startDrag(event: MouseEvent) {
    if (!this.scrollContainer) return;
    this.isDragging = true;
    this.startX = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
    this.velocity = 0;
    this.lastMoveTime = Date.now();

    // Stop any existing momentum scrolling
    clearInterval(this.momentumID);
    
    document.body.style.userSelect = "none"; // Prevents text selection while dragging
  }

  onDrag(event: MouseEvent) {
    if (!this.isDragging || !this.scrollContainer) return;
    event.preventDefault();
    
    const x = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    const deltaX = x - this.startX;
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - deltaX;

    // Calculate velocity
    const now = Date.now();
    const deltaTime = now - this.lastMoveTime;
    this.velocity = deltaX / deltaTime;
    this.lastMoveTime = now;

    this.checkScroll();
  }

  stopDrag() {
    if (!this.isDragging) return;
    this.isDragging = false;

    document.body.style.userSelect = ""; // Re-enable text selection
    
    // Apply momentum scrolling
    this.applyMomentumScrolling();
  }

  applyMomentumScrolling() {
    const friction = 0.95; // Adjust for smooth deceleration
    const threshold = 0.01; // Minimum velocity to stop
    let currentVelocity = this.velocity * 20; // Amplify velocity

    this.momentumID = setInterval(() => {
      if (!this.scrollContainer || Math.abs(currentVelocity) < threshold) {
        clearInterval(this.momentumID);
        return;
      }

      this.scrollContainer.nativeElement.scrollLeft -= currentVelocity;
      currentVelocity *= friction; // Reduce velocity over time

      this.checkScroll();
    }, 16); // Run every 16ms (~60fps)
  }

  @HostListener('window:resize')
  checkScroll() {
    if (!this.scrollContainer) return;
    const container = this.scrollContainer.nativeElement;
    this.showLeftShadow = container.scrollLeft > 0;
    this.showRightShadow = container.scrollLeft + container.clientWidth < container.scrollWidth;
  }
}