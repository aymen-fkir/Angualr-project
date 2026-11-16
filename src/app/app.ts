import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';
import { UserProfileComponent } from './components/user-profile/user-profile';
import { FriendsListComponent } from './components/friends-list/friends-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    UserProfileComponent,
    FriendsListComponent
  ],
  templateUrl: './app.html'
})
export class App {}