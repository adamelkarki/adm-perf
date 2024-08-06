import { Component } from '@angular/core';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ServicesComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
