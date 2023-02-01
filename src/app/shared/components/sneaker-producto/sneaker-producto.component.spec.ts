import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerProductoComponent } from './sneaker-producto.component';

describe('SneakerProductoComponent', () => {
  let component: SneakerProductoComponent;
  let fixture: ComponentFixture<SneakerProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SneakerProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
