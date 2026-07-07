import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { HeroSectionComponent } from '@app/shared/components/hero-section/hero-section.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonicModule, SearchComponent, HeroSectionComponent],
})
export class AboutPage {}
