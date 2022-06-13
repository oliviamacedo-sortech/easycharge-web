import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCobrancaComponent } from './lista-cobranca.component';

describe('ListaCobrancaComponent', () => {
  let component: ListaCobrancaComponent;
  let fixture: ComponentFixture<ListaCobrancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCobrancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCobrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
