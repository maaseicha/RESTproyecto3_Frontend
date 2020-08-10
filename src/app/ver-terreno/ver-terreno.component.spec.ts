import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTerrenoComponent } from './ver-terreno.component';

describe('VerTerrenoComponent', () => {
  let component: VerTerrenoComponent;
  let fixture: ComponentFixture<VerTerrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTerrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTerrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
