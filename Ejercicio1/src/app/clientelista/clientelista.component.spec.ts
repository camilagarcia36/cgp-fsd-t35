import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientelistaComponent } from './clientelista.component';

describe('ClientelistaComponent', () => {
  let component: ClientelistaComponent;
  let fixture: ComponentFixture<ClientelistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientelistaComponent]
    });
    fixture = TestBed.createComponent(ClientelistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
