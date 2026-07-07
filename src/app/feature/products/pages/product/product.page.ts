import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { ProductDetailComponent } from '@app/feature/products/components/product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  template: `
    <app-search />
    <ion-content [fullscreen]="true">
      <app-product-detail *ngIf="slug" [slug]="slug" />
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonicModule, CommonModule, SearchComponent, ProductDetailComponent],
})
export class ProductPage implements OnInit {
  slug: string | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') as string;
  }
}
