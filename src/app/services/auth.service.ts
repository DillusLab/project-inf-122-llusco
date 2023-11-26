import { Injectable } from '@angular/core';
import { browserSessionPersistence, getAuth, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router = new Router
  ) { }


  // login method
  /*async login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/dashboard']);
    }, erro => {
      alert(erro.message);
    });
  }*/

  async login(email: string, password: string) {
    const auth = getAuth()
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      if (user.user) {
        localStorage.setItem('user', JSON.stringify(user.user));

        localStorage.setItem('loginEmail', email);
        localStorage.setItem('loginPassword', password);

        user.user.getIdToken(true).then((token) => localStorage.setItem('token', token));

        setPersistence(auth, browserSessionPersistence)
          .then(() => {
            return signInWithEmailAndPassword(auth, email, password);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });

          this.router.navigate(['/dashboard']);
      }
    } catch (e) {

    }
  }



  // register method
  async register(email: string, password: string) {
    const auth = getAuth()
    try {
      let user = await createUserWithEmailAndPassword(auth, email, password);
      if (user.user) {
        alert('Se ha registrado correctamente');
        this.router.navigate(['/login']);
      }
    } catch (e) {
      console.log('Un error inesperado a ocurido.  Por favor inténtelo otra vez.');
    }

    /*createUserWithEmailAndPassword(this.auth, email, password).then(() => {
      alert('Se ha registrado correctamente');
      this.router.navigate(['/login']);
    });*/
  }

  // sign out
  async logout() {
    const auth = getAuth()
    try {
      await signOut(auth);
      localStorage.clear();
      this.router.navigate(['/login']);
    } catch (e) {
      console.log('Un error inesperado a ocurido.  Por favor inténtelo otra vez.');
    }

    /*signOut(this.auth).then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    });*/
  }

}


