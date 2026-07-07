import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { HeroSectionComponent } from '@app/shared/components/hero-section/hero-section.component';

@Component({
  selector: 'app-not-found',
  template: `
    <app-search />
    <ion-content [fullscreen]="true">
      <app-hero-section
        imageName="hero-section-not-found"
        imageAlt="404 Page Not Found"
        title="404"
        subtitle="Page not found"
        buttonText="Go to Home"
        buttonLink="/"
      />
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonicModule, SearchComponent, HeroSectionComponent],
})
export class NotFoundPage {}
