import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-overall',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './main-overall.component.html',
  styleUrl: './main-overall.component.scss'
})
export class MainOverallComponent {
  constructor (public app: AppComponent) {}
}
