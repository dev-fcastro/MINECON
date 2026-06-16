import {
  Component,
  input,
  signal,
  computed,
  ChangeDetectionStrategy,
  inject,
  DestroyRef,
  afterNextRender,
} from '@angular/core';
import { RouterLink } from '@angular/router';

export interface SliderImage {
  url: string;
  alt: string;
  label?: string;
  caption?: string;
  route?: string;
  ctaLabel?: string;
}

@Component({
  selector: 'app-slider',
  imports: [RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
  images = input<SliderImage[]>([]);
  intervalMs = input<number>(2000);

  currentIndex = signal(0);

  currentImage = computed<SliderImage | null>(() => {
    const imgs = this.images();
    return imgs.length > 0 ? imgs[this.currentIndex()] : null;
  });

  private readonly destroyRef = inject(DestroyRef);
  private timer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    afterNextRender(() => {
      this.startTimer();
      this.destroyRef.onDestroy(() => this.clearTimer());
    });
  }

  private startTimer(): void {
    this.clearTimer();
    this.timer = setInterval(() => this.advance(), this.intervalMs());
  }

  private clearTimer(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private advance(): void {
    const total = this.images().length;
    if (total === 0) return;
    this.currentIndex.update((i) => (i + 1) % total);
  }

  nextImage(): void {
    this.advance();
    this.startTimer();
  }

  prevImage(): void {
    const total = this.images().length;
    if (total === 0) return;
    this.currentIndex.update((i) => (i - 1 + total) % total);
    this.startTimer();
  }

  goTo(index: number): void {
    const total = this.images().length;
    if (index >= 0 && index < total) {
      this.currentIndex.set(index);
      this.startTimer();
    }
  }
}
