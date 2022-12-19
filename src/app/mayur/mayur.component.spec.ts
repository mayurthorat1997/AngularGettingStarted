import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayurComponent } from './mayur.component';

describe('MayurComponent', () => {
  let component: MayurComponent;
  let fixture: ComponentFixture<MayurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MayurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
