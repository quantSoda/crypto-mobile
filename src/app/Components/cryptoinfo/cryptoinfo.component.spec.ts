import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoinfoComponent } from './cryptoinfo.component';

describe('CryptoinfoComponent', () => {
  let component: CryptoinfoComponent;
  let fixture: ComponentFixture<CryptoinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
