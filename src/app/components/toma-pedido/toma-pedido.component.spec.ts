import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaPedidoComponent } from './toma-pedido.component';

describe('TomaPedidoComponent', () => {
  let component: TomaPedidoComponent;
  let fixture: ComponentFixture<TomaPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomaPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
