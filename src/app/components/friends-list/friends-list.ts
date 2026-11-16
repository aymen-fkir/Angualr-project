import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [FormsModule], // Required for [(ngModel)]
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css'
})
export class FriendsListComponent {
  friendSearchName = 'Ahmed';
  friends = ['Sami', 'Sarra', 'Amine'];
}