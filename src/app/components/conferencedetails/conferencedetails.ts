import { Component,input } from '@angular/core';
import { IConference } from '../../Models/Iconference';

@Component({
  selector: 'app-conferencedetails',
  imports: [],
  templateUrl: './conferencedetails.html',
  styleUrl: './conferencedetails.css',
})
export class Conferencedetails {
  confdetails= input<IConference>();
  
}
