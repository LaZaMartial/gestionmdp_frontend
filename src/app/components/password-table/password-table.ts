import { IPasswordListResponse, IPasswordPostResponse } from './../../types/type';
import { Component, inject, input, signal } from '@angular/core';
import { PasswordService } from '../../services/PasswordService/password-service';
import { IPassword } from '../../types/type';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { PasswordAddDialog } from '../password-dialog/password-dialog';
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

  readonly dialog = inject(MatDialog)

  // get all the password when the component is created
  ngOnInit(): void {
    this.passwordService
      .getPassword()
      .subscribe(
        (data: IPasswordListResponse) => { this.passwordItems.set(data.data) }
      );
  }

  // Delete password
  delete(item: IPassword) {
    this.passwordService.deletePassword(item).subscribe()
    this.deleteRow(item)
  }

  // Update the list of password in the table
  addRow(items: IPassword) {
    this.passwordItems.update(list => [...list, items])
  }

  // Delete the row of selected item
  deleteRow(item: IPassword) {
    this.passwordItems.update(list => list.filter(p => p.id !== item.id));
  }

  patchRow(id: number, changes: Partial<IPassword>) {
    this.passwordItems.update(list =>
      list.map(item =>
        item.id === id ? { ...item, ...changes } : item
      )
    );
  }

  // Update password
  openDialog(data: IPassword): void {
    const dialogRef = this.dialog.open(PasswordAddDialog, {
      data: { action: 'edit', password: data }
    })

    dialogRef.afterClosed().subscribe((result: IPasswordPostResponse) => {
      if (result !== undefined) {
        this.patchRow(result.data.id, {
          login: result.data.login,
          description: result.data.description,
          lien: result.data.lien,
          observation: result.data.observation
        })
      }
    })
  }
}
