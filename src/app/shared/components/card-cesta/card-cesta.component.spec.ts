import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCestaComponent } from './card-cesta.component';

describe('CardCestaComponent', () => {
  let component: CardCestaComponent;
  let fixture: ComponentFixture<CardCestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
