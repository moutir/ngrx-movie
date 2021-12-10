import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResutComponent } from './search-resut.component';

describe('SearchResutComponent', () => {
  let component: SearchResutComponent;
  let fixture: ComponentFixture<SearchResutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
