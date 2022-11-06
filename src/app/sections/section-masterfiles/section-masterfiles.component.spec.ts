import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMasterfilesComponent } from './section-masterfiles.component';

describe('SectionMasterfilesComponent', () => {
  let component: SectionMasterfilesComponent;
  let fixture: ComponentFixture<SectionMasterfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMasterfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMasterfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
