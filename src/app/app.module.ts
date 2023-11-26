import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.development';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContentComponent } from './components/content/content.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    HeaderComponent,
    HeroComponent,
    ContentComponent,
    CategoriaComponent,
    AgregarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() => initializeApp({"projectId":"notificaciones-ba34e","appId":"1:838824030704:web:997771e82c3948080a6d35","databaseURL":"https://notificaciones-ba34e.firebaseio.com","storageBucket":"notificaciones-ba34e.appspot.com","locationId":"us-central","apiKey":"AIzaSyA8a8AN8CFxG6bhlItz16Z8gThH0LpcZn4","authDomain":"notificaciones-ba34e.firebaseapp.com","messagingSenderId":"838824030704","measurementId":"G-HBLZBYY896"}))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
