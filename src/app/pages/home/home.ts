import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [MatIconModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  menuItems: MenuItem[] = [
    {
      routerLink: '/general',
      icon: 'home',
      label: 'Головна'
    },
    {
      routerLink: '/statistics',
      icon: 'bar_chart',
      label: 'Статистика'
    },
    {
      routerLink: '/calendar',
      icon: 'calendar_month',
      label: 'Календар'
    },
    {
      routerLink: '/settings',
      icon: 'settings_account_box',
      label: 'Налаштування'
    },
  ];
}
interface MenuItem {
  routerLink: string,
  icon: string,
  label: string
}
