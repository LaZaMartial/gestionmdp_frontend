import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../services/AuthService/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  private authService = inject(AuthService)
  private router = inject(Router)

  logout() {
    this.authService.logout()
    this.router.navigate([''])
  }
}
