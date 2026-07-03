import {
  Component,
  input,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BrandShowcaseItem {
  name: string;
  logoSrc: string;
  route: string;
  logoWidth?: number;
  logoHeight?: number;
  categories: string[];
  ctaLabel?: string;
  bgImage?: string;
}

@Component({
  selector: 'app-brandshowcase',
  imports: [RouterLink],
  templateUrl: './brandshowcase.component.html',
  styleUrl: './brandshowcase.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandShowcaseComponent {
  items = input<BrandShowcaseItem[]>([]);

  activeIndex = signal(-1);

  gridCols = computed(() => {
    const active = this.activeIndex();
    const count = this.items().length;
    if (active === -1) {
      return Array(count).fill('1fr').join(' ');
    }
    return this.items()
      .map((_, i) => (i === active ? '1.4fr' : '0.8fr'))
      .join(' ');
  });

  select(index: number): void {
    this.activeIndex.set(index);
  }

  resetActive(): void {
    this.activeIndex.set(-1);
  }
}
