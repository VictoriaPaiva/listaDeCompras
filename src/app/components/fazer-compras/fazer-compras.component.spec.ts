import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerComprasComponent } from './fazer-compras.component';

describe('FazerComprasComponent', () => {
  let component: FazerComprasComponent;
  let fixture: ComponentFixture<FazerComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazerComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazerComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
