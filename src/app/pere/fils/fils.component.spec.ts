import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilsComponent } from '@src/app/pere/fils/fils.component';

describe('FilsComponent', () => {
  let component: FilsComponent;
  let fixture: ComponentFixture<FilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
