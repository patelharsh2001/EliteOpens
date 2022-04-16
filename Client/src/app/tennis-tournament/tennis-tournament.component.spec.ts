import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisTournamentComponent } from './tennis-tournament.component';

describe('tennisTournamentComponent', () => {
  let component: TennisTournamentComponent;
  let fixture: ComponentFixture<TennisTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
