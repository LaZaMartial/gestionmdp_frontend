import { Component } from '@angular/core';
import { PasswordPage } from './password-page/password-page';
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-home-page',
  imports: [PasswordPage, Navbar],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
