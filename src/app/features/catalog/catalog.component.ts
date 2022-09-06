import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from './model/device';

@Component({
  selector: 'app-catalog',
  template: `
    <p>catalog works</p>
    <pre>{{devices | json }}</pre>
    <li *ngFor="let device of devices">
      {{device.label}}
    </li>
  `,
  styles: []
})
export class CatalogComponent implements OnInit {
  devices: Device[] = [];

  constructor(private http: HttpClient) {
  }
  
  ngOnInit(): void {
    this.http.get<Device[]>('http://localhost:3000/devices')
      .subscribe((result: Device[]) => {
        this.devices = result;
      });
  }

}


// GET: Caricamento dati da REST API e custom types

// importazione di un interface
// creazione di una lista di dizionari contenenti le specifiche di alcuni cellulari
// spiegazione del Constructor e ngOnInit 
// stampa a schermo dei valori del file db.json


