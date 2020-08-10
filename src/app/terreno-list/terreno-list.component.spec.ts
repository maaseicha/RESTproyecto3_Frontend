import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrenoListComponent } from './terreno-list.component';

describe('TerrenoListComponent', () => {
  let component: TerrenoListComponent;
  let fixture: ComponentFixture<TerrenoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrenoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrenoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
