import { Component, Injectable, OnInit } from '@angular/core';
import { MainOverallComponent } from './components/main-overall/main-overall.component';
import { NavComponent } from './components/nav/nav.component';
import { OverviewSectionComponent } from './components/overview-section/overview-section.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, OverviewSectionComponent, MainOverallComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'social-media-dashboard';

  constructor () {}
 
  ngOnInit(): void {}

  darkMode: boolean = true;
}
