import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUrlModalComponent } from './add-new-url-modal.component';

describe('AddNewUrlModalComponent', () => {
  let component: AddNewUrlModalComponent;
  let fixture: ComponentFixture<AddNewUrlModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewUrlModalComponent]
    });
    fixture = TestBed.createComponent(AddNewUrlModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
