import { PasswordService } from '../../services/PasswordService/password-service';
import { Component, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IDialogData, IPasswordBody } from '../../types/type';

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
  templateUrl: './password-dialog.html',
  styleUrl: './password-dialog.css'
})
export class PasswordAddDialog {
  // Link the dialog
  readonly dialogRef = inject(MatDialogRef<PasswordAddDialog>);
  readonly data = inject<IDialogData>(MAT_DIALOG_DATA);

  isEdit = this.data.action === 'edit'

  title = this.isEdit ? 'Modifier le mot de passe' : 'Ajouter un mot de passe'
  confirmLabel = this.isEdit ? 'Mettre à jour' : 'Ajouter';

  // Inject the password service
  private readonly passwordService = inject(PasswordService);

  passwordForm = new FormGroup({
    login: new FormControl(this.data.password?.login ?? ''),
    description: new FormControl(this.data.password?.description ?? ''),
    lien: new FormControl(this.data.password?.lien ?? ''),
    motdepasse: new FormControl(this.data.password?.motdepasse ?? ''),
    observation: new FormControl(this.data.password?.observation ?? '')
  })

  // Submit the form in the dialog
  submit(): void {
    const raw = this.passwordForm.value as IPasswordBody;
    const payload: Partial<IPasswordBody> = {
      login: raw.login,
      description: raw.description!,
      lien: raw.lien!,
      observation: raw.observation!,
      // add password only when creating
      ...(this.isEdit ? {} : { motdepasse: raw.motdepasse! })
    }

    const serviceCall = this.isEdit
      ? this.passwordService.updatePassword(this.data.password!.id, payload)
      : this.passwordService.postPassword(raw)
    serviceCall.subscribe((newPassword) => {
      this.dialogRef.close(newPassword);
    })
  }

  // Close the dialog
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
