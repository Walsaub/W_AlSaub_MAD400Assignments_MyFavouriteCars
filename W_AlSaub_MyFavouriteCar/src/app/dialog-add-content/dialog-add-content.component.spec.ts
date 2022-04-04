import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddContentComponent } from './dialog-add-content.component';

describe('ContentCardComponent', () => {
  let component: DialogAddContentComponent;
  let fixture: ComponentFixture<DialogAddContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAddContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
