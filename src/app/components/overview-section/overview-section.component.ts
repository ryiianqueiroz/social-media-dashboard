import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview-section',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './overview-section.component.html',
  styleUrl: './overview-section.component.scss'
})
export class OverviewSectionComponent {
  constructor (public app: AppComponent) {}
}
