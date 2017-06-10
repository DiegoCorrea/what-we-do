import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDeO1onydUc5Wtx7e-RZYpoujXOqqGdBJM",
    authDomain: "what-i-do-1e5ed.firebaseapp.com",
    databaseURL: "https://what-i-do-1e5ed.firebaseio.com",
    projectId: "what-i-do-1e5ed",
    storageBucket: "what-i-do-1e5ed.appspot.com",
    messagingSenderId: "23860582416"
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
