import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class SidenavComponent implements OnInit {
  appTitle = 'Vault 42';
  appSubtitle = 'Would largest Seeds and Plants shop';
  appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Categories', url: '/categories', icon: 'albums' },
    { title: 'Seeds and Plants', url: '/products', icon: 'leaf' },
    { title: 'About', url: '/about', icon: 'balloon' },
  ];

  isDarkMode = signal(false);

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const storedTheme = localStorage.getItem('theme');

    const darkActive = storedTheme === 'dark' || (!storedTheme && prefersDark.matches);
    this.isDarkMode.set(darkActive);
    this.setDarkTheme(darkActive);
  }

  toggleDarkMode(event: any) {
    const isDark = event.detail.checked;
    this.isDarkMode.set(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    this.setDarkTheme(isDark);
  }

  private setDarkTheme(isDark: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', isDark);
  }
}
