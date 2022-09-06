import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterModule([
    //   { path: 'catalog', component: CatalogComponent },
    //   { path: 'contacts', component: ContactsComponent },
    //   { path: '**', redirectTo: 'catalog' },
    // ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
