import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProntoPage } from './pronto.page';

describe('ProntoPage', () => {
  let component: ProntoPage;
  let fixture: ComponentFixture<ProntoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProntoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
