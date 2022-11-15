import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryScrollbarAngularDirective } from './jquery-scrollbar-angular.directive';

describe('JqueryScrollbarAngularComponent', () => {
  let component: JqueryScrollbarAngularDirective;
  let fixture: ComponentFixture<JqueryScrollbarAngularDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqueryScrollbarAngularDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JqueryScrollbarAngularDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
