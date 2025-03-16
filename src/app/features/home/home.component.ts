import { Component } from '@angular/core';
import { ScrollerComponent } from '../../shared/scroller/scroller.component'; // ✅ Import Scroller

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true, // ✅ Ensure home component is standalone
  imports: [ScrollerComponent] // ✅ Import the scroller component here
})
export class HomeComponent {}
