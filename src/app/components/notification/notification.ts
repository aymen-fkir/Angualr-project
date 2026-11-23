import { Component,signal } from '@angular/core';



@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})

export class Notification {
  btnText = "Afficher"
  notificationList= signal([
    {message: "New message received"},
    {message: "Your profile has been updated"},
    {message: "You have a new friend request"},
    {message: "Your password has been changed"},
    {message: "New comment on your post"},
  ])
  show = signal(false)

  showNotification() {
    this.show.set(!this.show())
    this.btnText = this.show() ? "Masquer" : "Afficher"
  }
}
