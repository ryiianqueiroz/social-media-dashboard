import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, AppComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  
  constructor (public app: AppComponent) {}

  changeMode(): any {
    this.app.darkMode = !this.app.darkMode
  }
}
