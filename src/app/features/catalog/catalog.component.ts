import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Device } from './model/device';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'app-catalog',
  template: `

    <form #f="ngForm" (submit)="add(f)">
      <input [ngModel] name="label" type="text" placeholder="Device Model">
      <button type="submit">ADD</button>
    </form>

    <li *ngFor="let device of devices">
      <p class="m-3 p-3">{{device.label}} ({{device.price}})</p>
      <button class="rounded bg-danger text-light" (click)="delete(device)"><i class="fa fa-trash" (click)="delete(device)"></i></button>
    </li>
  `,
  styles: [`li{list-style-type: none;}`]
})
export class CatalogComponent implements OnInit {
  devices: Device[] = [];
  // URL = 'http://localhost:3000';
  error: HttpErrorResponse | null = null;



  constructor(private http: HttpClient) {
  }
  
  ngOnInit(): void {
    this.http.get<Device[]>(`http://localhost:3000/devices`)
      .subscribe((result: Device[]) => {
        this.devices = result;
      });
  }

  delete(device: Device) {
    this.error = null;
    this.http.delete(`${URL}/devices/${device.id}`)
      .pipe(
        catchError((err) => of(err))
      )
      .subscribe((result: HttpErrorResponse | undefined) => {
        if (result instanceof HttpErrorResponse) {
          this.error = result;
        } else {
          const index = this.devices.findIndex(d => d.id === device.id);
          this.devices.splice(index, 1);
        }
      });
  }
  add(form: NgForm) {
    console.log(form.value)
    this.http.post(`http://localhost:3000/devices`, form.value).subscribe(result =>{
      this.devices.push(form.value);

    });
  }

}


// POST: Aggiungere elementi alla collezione tramite form
// esempio utile se dovessi aggiungere o eliminare articoli ad un carrello in un marketplace
// Non funziona il metodo delete(), quindi il tasto funziona. Ma gli elementi vengono aggiunti


