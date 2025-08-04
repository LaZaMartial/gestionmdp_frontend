import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordAddDialog } from './password-add-dialog';

describe('PasswordAddDialog', () => {
  let component: PasswordAddDialog;
  let fixture: ComponentFixture<PasswordAddDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordAddDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordAddDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
