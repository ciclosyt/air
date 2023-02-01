import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSneakersComponent } from './card-sneakers.component';

describe('CardSneakersComponent', () => {
  let component: CardSneakersComponent;
  let fixture: ComponentFixture<CardSneakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSneakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
