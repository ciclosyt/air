import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificarseComponent } from './identificarse.component';

describe('IdentificarseComponent', () => {
  let component: IdentificarseComponent;
  let fixture: ComponentFixture<IdentificarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificarseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
