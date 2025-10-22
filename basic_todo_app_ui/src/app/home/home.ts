import { Component, OnInit, signal } from '@angular/core';
import { AuthApi } from '../auth-api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  // use a signal so zoneless change detection (provideZonelessChangeDetection)
  // will notice updates and the template will update when the HTTP call returns
  message = signal('jhbjknklmnlkmkl');

  constructor(private auth: AuthApi) {}

  ngOnInit() {
    this.auth.getWelcomeMessage().subscribe({
      next: (msg: string) => this.message.set(msg),
      error: () => this.message.set('Unauthorized or invalid token')
    });
  }
}
