import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompiledResultComponent } from './compiled-result.component';

describe('CompiledResultComponent', () => {
  let component: CompiledResultComponent;
  let fixture: ComponentFixture<CompiledResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompiledResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompiledResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
