import { PasswordService } from './../../services/PasswordService/password-service';
import { Component, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { IPasswordBody } from '../../types/type';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-password-add-dialog',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    ReactiveFormsModule
  ],
  templateUrl: './password-add-dialog.html',
  styleUrl: './password-add-dialog.css'
})
export class PasswordAddDialog {
  // Link the dialog
  readonly dialogRef = inject(MatDialogRef<PasswordAddDialog>);
  readonly data = inject<IPasswordBody>(MAT_DIALOG_DATA);

  // Inject the password service
  private readonly passwordService = inject(PasswordService);

  passwordForm = new FormGroup({
    login: new FormControl(this.data.login),
    description: new FormControl(this.data.description),
    lien: new FormControl(this.data.lien),
    motdepasse: new FormControl(this.data.motdepasse),
    observation: new FormControl(this.data.observation || "")
  })

  // Submit the form in the dialog
  submit(): void {
    const payload = this.passwordForm.value as IPasswordBody;
    this.passwordService.postPassword(payload).subscribe((newPassword) => {
      this.dialogRef.close(newPassword);
    })
  }

  // Close the dialog
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
