import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodatosComponent } from './registrodatos.component';

describe('RegistrodatosComponent', () => {
  let component: RegistrodatosComponent;
  let fixture: ComponentFixture<RegistrodatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrodatosComponent]
    });
    fixture = TestBed.createComponent(RegistrodatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
