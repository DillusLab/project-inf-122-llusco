import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, getAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private auth: Auth = inject(Auth),
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      this.router.navigate(['/dashboard'])
    } else {
      localStorage.clear();
    }
  }

  login() {
    this.authService.login(this.email, this.password);
  }

  logout() {
  }
}