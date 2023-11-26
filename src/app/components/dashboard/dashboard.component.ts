import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { browserSessionPersistence, getAuth, setPersistence } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from '@firebase/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  email: string = '';

  constructor(private router: Router) {

  }

  ngOnInit(): void {

    var localUser = JSON.parse(localStorage.getItem('user') || 'null');
    let e = localStorage.getItem('loginEmail');

    if (e !== null) {
      this.email = localUser.email;
      //alert('© Esta página se ha realizado con firebase y angular.');
      console.log(localUser);
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnDestroy(): void {
    localStorage.clear();

  }

  // register() {
  //   this.auth.logout();
  // }

}

//https://medium.com/@0ka/angular-firebase-create-and-read-e1fa37494f30
//async createRobot(name: string, color: string, age: string) {
//  const docRef = await addDoc(collection(this.firestore, 'robots'), {
//    name: name,
//    color: color,
//    age: age
//  });
//  console.log("Document written with ID: ", docRef.id);
//}
//https://github.com/code1ogic/Angular-Firebase-crud/blob/main/src/app/shared/data.service.ts

//https://github.com/angular/angularfire/tree/master/src/database