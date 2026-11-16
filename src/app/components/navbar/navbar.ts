import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  menuItems = ['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin'];
  activeTab = 'Accueil';

  setActive(item: string) {
    this.activeTab = item;
  }
}