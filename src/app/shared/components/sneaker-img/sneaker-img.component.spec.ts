import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerImgComponent } from './sneaker-img.component';

describe('SneakerImgComponent', () => {
  let component: SneakerImgComponent;
  let fixture: ComponentFixture<SneakerImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SneakerImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
