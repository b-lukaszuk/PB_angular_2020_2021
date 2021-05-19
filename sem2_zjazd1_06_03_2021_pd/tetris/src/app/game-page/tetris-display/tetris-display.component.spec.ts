import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisDisplayComponent } from './tetris-display.component';

describe('TetrisDisplayComponent', () => {
  let component: TetrisDisplayComponent;
  let fixture: ComponentFixture<TetrisDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TetrisDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrisDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
