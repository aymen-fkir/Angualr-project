import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';
import { UserProfileComponent } from './components/user-profile/user-profile';
import { FriendsListComponent } from './components/friends-list/friends-list';
import {Notification} from "./components/notification/notification";
import { Conference } from './components/conference/conference';
import { Conferencedetails } from './components/conferencedetails/conferencedetails';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    UserProfileComponent,
    FriendsListComponent,
    Notification,
    Conference,
  ],
  templateUrl: './app.html'
})
export class App {}