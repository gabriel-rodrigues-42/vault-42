import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { CategoryDetailComponent } from '@app/feature/categories/components/category-detail/category-detail.component';

@Component({
  selector: 'app-category',
  template: `
    <app-search />
    <ion-content [fullscreen]="true">
      <app-category-detail *ngIf="slug" [slug]="slug"></app-category-detail>
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonicModule, CommonModule, SearchComponent, CategoryDetailComponent],
})
export class CategoryPage implements OnInit {
  slug: string | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') as string;
  }
}
