import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ContactComponent, PortfolioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
