import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { BearsComponent } from './bears/bears.component';
import { BearDetailComponent } from './bear-detail/bear-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BearsComponent,
    BearDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
