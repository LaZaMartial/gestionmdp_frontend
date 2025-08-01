import { Component } from '@angular/core';
import { PasswordTable } from '../../components/password-table/password-table';

@Component({
  selector: 'app-home-page',
  imports: [PasswordTable],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
