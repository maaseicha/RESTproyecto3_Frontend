import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivosComponent } from './cultivos.component';

describe('CultivosComponent', () => {
  let component: CultivosComponent;
  let fixture: ComponentFixture<CultivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
