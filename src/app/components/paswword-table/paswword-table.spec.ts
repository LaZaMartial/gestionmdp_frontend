import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaswwordTable } from './paswword-table';

describe('PaswwordTable', () => {
  let component: PaswwordTable;
  let fixture: ComponentFixture<PaswwordTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaswwordTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaswwordTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
