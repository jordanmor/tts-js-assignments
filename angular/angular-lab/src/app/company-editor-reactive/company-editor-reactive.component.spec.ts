import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEditorReactiveComponent } from './company-editor-reactive.component';

describe('CompanyEditorReactiveComponent', () => {
  let component: CompanyEditorReactiveComponent;
  let fixture: ComponentFixture<CompanyEditorReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEditorReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditorReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
