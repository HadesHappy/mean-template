import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolmenuComponent } from './toolmenu.component';

describe('ToolmenuComponent', () => {
  let component: ToolmenuComponent;
  let fixture: ComponentFixture<ToolmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
