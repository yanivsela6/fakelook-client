import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowPostComponent } from './window-post.component';

describe('WindowPostComponent', () => {
  let component: WindowPostComponent;
  let fixture: ComponentFixture<WindowPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
