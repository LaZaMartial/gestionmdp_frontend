import { Component, inject, signal } from '@angular/core';
import { PasswordService } from '../../services/PasswordService/password-service';
import { IPassword } from '../../types/type';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-password-table',
  imports: [MatTableModule],
  templateUrl: './password-table.html',
  styleUrl: './password-table.css'
})
export class PasswordTable {
  private passwordService = inject(PasswordService);

  passwordItems = signal<Array<IPassword>>([]);
  displayedColumns: string[] = ['description', 'lien', 'login', 'motdepasse', 'dateCreation', 'dateModification', 'dateExpiration', 'observation'];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.passwordService
      .getPassword()
      .subscribe((data) => this.passwordItems.set(data));
  }
}
