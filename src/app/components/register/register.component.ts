import { Component, OnInit, inject } from '@angular/core';
import { Auth, getAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
        this.router.navigate(['/dashboard']);
      } else {
        localStorage.removeItem('token');
      }
    }

  register(){
    this.authService.register(this.email, this.password);
  }
}
