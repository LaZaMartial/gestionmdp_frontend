import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/Auth/auth-service';
import { IUserLogin } from '../../types/type';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginForm {
  // Accede au service d'authentification
  private auth = inject(AuthService);
  //Accede au router service
  private router = inject(Router);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit() {
    const credentials: IUserLogin = this.loginForm.value as IUserLogin
    this.auth.login(credentials).subscribe({
      next: () => {
        this.router.navigate(['/home'])
      },
      error: (err) => {
        console.log("Invalid credential");
      }
    })
  }
}
