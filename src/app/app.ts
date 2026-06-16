import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from './features/layout/sidebar-component/sidebar.component';
import { NavbarComponent } from './features/layout/navbar-component/navbar.component';
import { FooterComponent } from './features/layout/footer-component/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
