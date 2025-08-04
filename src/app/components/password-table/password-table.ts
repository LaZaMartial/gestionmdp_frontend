import { IPasswordListResponse } from './../../types/type';
import { Component, inject, input, signal } from '@angular/core';
import { PasswordService } from '../../services/PasswordService/password-service';
import { IPassword } from '../../types/type';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-password-table',
  imports: [
    MatTableModule,
    DatePipe,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './password-table.html',
  styleUrl: './password-table.css'
})
export class PasswordTable {
  // Inject the password service
  private passwordService = inject(PasswordService);

  // Initialize the array of the table
  passwordItems = signal<Array<IPassword>>([]);
  displayedColumns: string[] = ['description', 'lien', 'login', 'motdepasse', 'dateCreation', 'dateModification', 'dateExpiration', 'observation', 'actions'];

  // get all the password when the component is created
  ngOnInit(): void {
    this.passwordService
      .getPassword()
      .subscribe(
        (data: IPasswordListResponse) => { this.passwordItems.set(data.data) }
      );
  }

  // Update the list of password in the table
  addRow(items: IPassword) {
    this.passwordItems.update(list => [...list, items])
  }

  edit(item: IPassword) { /* ... */ }
  delete(item: IPassword) { /* ... */ }
}
