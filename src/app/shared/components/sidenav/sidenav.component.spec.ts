import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SidenavComponent } from './sidenav.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [IonicModule.forRoot(), CommonModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => EMPTY,
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dark mode state and update document class list', () => {
    spyOn(document.documentElement.classList, 'toggle');
    spyOn(localStorage, 'setItem');

    // Toggle on
    const mockEvent = { detail: { checked: true } };
    component.toggleDarkMode(mockEvent);

    expect(component.isDarkMode()).toBeTrue();
    expect(document.documentElement.classList.toggle).toHaveBeenCalledWith(
      'ion-palette-dark',
      true,
    );
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');

    // Toggle off
    const mockEventOff = { detail: { checked: false } };
    component.toggleDarkMode(mockEventOff);

    expect(component.isDarkMode()).toBeFalse();
    expect(document.documentElement.classList.toggle).toHaveBeenCalledWith(
      'ion-palette-dark',
      false,
    );
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
  });
});
