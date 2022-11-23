import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGamesToEventComponent } from './add-games-to-event.component';

describe('AddGamesToEventComponent', () => {
  let component: AddGamesToEventComponent;
  let fixture: ComponentFixture<AddGamesToEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGamesToEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGamesToEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
