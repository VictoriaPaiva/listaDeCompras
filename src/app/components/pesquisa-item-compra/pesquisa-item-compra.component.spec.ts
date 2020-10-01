import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaItemCompraComponent } from './pesquisa-item-compra.component';

describe('PesquisaItemCompraComponent', () => {
  let component: PesquisaItemCompraComponent;
  let fixture: ComponentFixture<PesquisaItemCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaItemCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaItemCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
