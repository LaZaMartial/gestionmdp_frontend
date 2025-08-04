import { IPasswordPostResponse } from './../../../types/type';
import { PasswordTable } from './../../../components/password-table/password-table';
import { ChangeDetectionStrategy, Component, inject, signal, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { PasswordAddDialog } from '../../../components/password-dialog/password-dialog';
import { IPassword } from '../../../types/type';

@Component({
  selector: 'app-password-page',
  imports: [PasswordTable,
    MatButtonModule],
  templateUrl: './password-page.html',
  styleUrl: './password-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordPage {
  // Link this component to his child
  @ViewChild(PasswordTable) table!: PasswordTable;

  passwords = signal<IPassword[]>([]);

  // Inject the dialog component
  readonly dialog = inject(MatDialog);

  // The dialog function
  openDialog(): void {
    const dialogRef = this.dialog.open(PasswordAddDialog, {
      data: { action: 'add', password: this.passwords() }
    })

    dialogRef.afterClosed().subscribe((result: IPasswordPostResponse) => {
      if (result !== undefined) {
        this.table.addRow(result.data);
      }
    })
  }
}
