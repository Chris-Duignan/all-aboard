import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGamePageComponent } from './single-game-page.component';

describe('SingleGamePageComponent', () => {
  let component: SingleGamePageComponent;
  let fixture: ComponentFixture<SingleGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleGamePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
