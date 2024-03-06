import { Component } from '@angular/core';
import { MainOverallComponent } from './components/main-overall/main-overall.component';
import { NavComponent } from './components/nav/nav.component';
import { OverviewSectionComponent } from './components/overview-section/overview-section.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, OverviewSectionComponent, MainOverallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'social-media-dashboard';
}
