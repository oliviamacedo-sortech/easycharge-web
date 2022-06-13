import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDividaComponent } from './lista-divida.component';

describe('ListaDividaComponent', () => {
  let component: ListaDividaComponent;
  let fixture: ComponentFixture<ListaDividaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDividaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDividaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
