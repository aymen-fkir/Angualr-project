import { Component } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { IConference } from '../../Models/Iconference';
import { Conferencedetails } from '../conferencedetails/conferencedetails';



@Component({
  selector: 'app-conference',
  imports: [UpperCasePipe,DatePipe,NgClass,Conferencedetails],
  templateUrl: './conference.html',
  styleUrl: './conference.css',
})
export class Conference {
  conferences: IConference[] = [

  {

   id: 1,
   title: 'Angular 21 Conference',

   description: 'Les nouveautés d’Angular 21 : signals, zoneless et contrôle de flux natif.',

   date: new Date(2027, 10, 15),

   place: 'Tunis',

   maxParticipants: 100,

   nbParticipants: 75,

  },

  {

   id: 2,

   title: 'Signals Workshop',

   description: 'Atelier pratique sur la gestion d’état réactive avec les signals.',

   date: new Date(2027, 10, 30),

   place: 'Ariana',

   maxParticipants: 30,

   nbParticipants: 24,

  },

  {

   id: 3,

   title: 'Web Conference',

   description: 'Panorama des technologies web modernes.',

   date: new Date(2027, 10, 20),

   place: 'Sousse',

   maxParticipants: 50,

   nbParticipants: 50,

  },

  {

   // Conférence passée : elle ne doit PAS apparaître (filtre « à venir »)

   id: 4,

   title: 'TypeScript Day',

   description: 'Édition 2025, déjà terminée.',

   date: new Date(2025, 4, 10),

   place: 'Monastir',

   maxParticipants: 80,

   nbParticipants: 80,

  },

 ];
 today:Date = new Date();
}
