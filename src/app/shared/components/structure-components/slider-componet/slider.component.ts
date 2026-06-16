import {
  Component,
  input,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';

export interface SliderImage {
  url: string;
  alt: string;
  caption?: string;
  label?: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
  images = input<SliderImage[]>([]);

  currentIndex = signal(0);

  currentImage = computed<SliderImage | null>(() => {
    const imgs = this.images();
    return imgs.length > 0 ? imgs[this.currentIndex()] : null;
  });

  nextImage(): void {
    const total = this.images().length;
    if (total === 0) return;
    this.currentIndex.update((i) => (i + 1) % total);
  }

  prevImage(): void {
    const total = this.images().length;
    if (total === 0) return;
    this.currentIndex.update((i) => (i - 1 + total) % total);
  }

  goTo(index: number): void {
    const total = this.images().length;
    if (index >= 0 && index < total) {
      this.currentIndex.set(index);
    }
  }
}
