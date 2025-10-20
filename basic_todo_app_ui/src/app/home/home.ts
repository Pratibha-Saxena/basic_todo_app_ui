import { Component, OnInit } from '@angular/core';
import { AuthApi } from '../auth-api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
message = '';

  constructor(private auth: AuthApi) {}

  ngOnInit() {
    this.auth.getWelcomeMessage().subscribe({
      next: (msg) => this.message = msg,
      error: () => this.message = 'Unauthorized or invalid token'
    });
  }
}
