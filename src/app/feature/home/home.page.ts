import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { HeroSectionComponent } from '@app/shared/components/hero-section/hero-section.component';
import { CategoryListComponent } from '@app/feature/categories/components/category-list/category-list.component';

@Component({
  selector: 'app-home',
  template: `
    <app-search />
    <ion-content [fullscreen]="true">
      <app-hero-section
        imageName="hero-section"
        imageAlt="Vault 42"
        title="Welcome to Vault 42"
        subtitle="Preserving the Future, One Seed at a Time"
        buttonText="Shop Now"
        buttonLink="/products"
      />
      <app-category-list />
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonicModule, SearchComponent, HeroSectionComponent, CategoryListComponent],
})
export class HomePage {}
