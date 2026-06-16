import {
  Component,
  input,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-textcarouselslider',
  templateUrl: './textcarouselslider.component.html',
  styleUrl: './textcarouselslider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextCarouselSliderComponent {
  tickerTexts = input<string[]>([]);

  duplicatedTexts = computed<string[]>(() => {
    const t = this.tickerTexts();
    return [...t, ...t];
  });
}
