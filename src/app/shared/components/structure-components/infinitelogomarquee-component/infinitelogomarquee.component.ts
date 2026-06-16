import {
  Component,
  input,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink } from '@angular/router';

export interface MarqueeItem {
  name: string;
  logoSrc: string;
  route: string;
}

@Component({
  selector: 'app-infinitelogomarquee',
  imports: [RouterLink],
  templateUrl: './infinitelogomarquee.component.html',
  styleUrl: './infinitelogomarquee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfiniteLogoMarqueeComponent {
  items = input<MarqueeItem[]>([]);

  duplicatedItems = computed<MarqueeItem[]>(() => {
    const i = this.items();
    return [...i, ...i];
  });

  hideImg(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
