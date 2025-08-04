import { Component } from '@angular/core';
import { PasswordPage } from './password-page/password-page';

@Component({
  selector: 'app-home-page',
  imports: [PasswordPage],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
