import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApi } from '../auth-api';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthApi, private router: Router) {}

  login() {
    this.auth.login(this.username, this.password);/*.subscribe({
      next: (res:any) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/home']);
      },
      error: () => this.error = 'Invalid username or password'
    });*/
  }
}
