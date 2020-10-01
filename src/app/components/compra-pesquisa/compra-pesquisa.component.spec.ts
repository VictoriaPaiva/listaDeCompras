import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraPesquisaComponent } from './compra-pesquisa.component';

describe('CompraPesquisaComponent', () => {
  let component: CompraPesquisaComponent;
  let fixture: ComponentFixture<CompraPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
