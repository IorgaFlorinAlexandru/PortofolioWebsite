import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCharacterComponent } from './string-character.component';

describe('StringCharacterComponent', () => {
  let component: StringCharacterComponent;
  let fixture: ComponentFixture<StringCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
