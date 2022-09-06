import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from './model/device';

@Component({
  selector: 'app-catalog',
  template: `
    <li *ngFor="let device of devices">
      {{device.label}} ({{device.price}})
      <button (click)="delete(device)">delete</button>
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

  delete(device: Device) {
    // const index = this.devices.indexOf(device);
    this.http.delete(`http://localhost:3000/devices/${device.id}`)
      .subscribe(() => {
        const index = this.devices.findIndex(d => d.id === device.id);
        this.devices.splice(index, 1);

      });
  }

}


// DELETE: Cancellazione elementi e gestione errori XHR

//cancellazione dei cellulari, sia solo a schermo che dal db.json


