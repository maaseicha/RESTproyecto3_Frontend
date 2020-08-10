import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrenoFormComponent } from './terreno-form.component';

describe('TerrenoFormComponent', () => {
  let component: TerrenoFormComponent;
  let fixture: ComponentFixture<TerrenoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrenoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrenoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
