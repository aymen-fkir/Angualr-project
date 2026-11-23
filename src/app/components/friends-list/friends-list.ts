import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Friend} from "../../Models/Ifriend";


@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [FormsModule], // Required for [(ngModel)]
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css'
})


export class FriendsListComponent {
  friendSearchName: Friend = { id: 1, name: 'Ahmed', lastname: 'Ben Salah' };

  friends: Friend[] = [
    { id: 2, name: 'John', lastname: 'Doe' },
    { id: 3, name: 'Jane', 'lastname': 'Smith' },
    { id: 4, name: 'Alice', lastname: 'Johnson' },
    { id: 5, name: 'Bob', lastname: 'Brown' }
  ];
}