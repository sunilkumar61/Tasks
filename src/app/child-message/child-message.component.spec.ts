import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildMessageComponent } from './child-message.component';

describe('ChildMessageComponent', () => {
  let component: ChildMessageComponent;
  let fixture: ComponentFixture<ChildMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
