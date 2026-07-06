import { Component, ChangeDetectionStrategy, signal, OnDestroy, afterNextRender } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

interface MontabertProduct {
  range: string;
  models: string;
  weight: string;
  impact: string;
  application: string;
  image: string;
}

@Component({
  selector: 'app-montabert',
  imports: [NgOptimizedImage, RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './montabert.component.html',
  styleUrl: './montabert.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MontabertComponent implements OnDestroy {

  readonly currentSlide = signal(0);
  private autoTimer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    afterNextRender(() => this.startAuto());
  }

  ngOnDestroy(): void { this.stopAuto(); }

  prev(): void { this.currentSlide.update(i => (i - 1 + this.bannerImages.length) % this.bannerImages.length); this.resetAuto(); }
  next(): void { this.currentSlide.update(i => (i + 1) % this.bannerImages.length); this.resetAuto(); }
  goTo(i: number): void { this.currentSlide.set(i); this.resetAuto(); }
  pauseAuto(): void { this.stopAuto(); }
  resumeAuto(): void { this.startAuto(); }

  private startAuto(): void {
    this.autoTimer = setInterval(() => {
      this.currentSlide.update(i => (i + 1) % this.bannerImages.length);
    }, 4500);
  }
  private stopAuto(): void {
    if (this.autoTimer !== null) { clearInterval(this.autoTimer); this.autoTimer = null; }
  }
  private resetAuto(): void { this.stopAuto(); this.startAuto(); }

  readonly bannerImages = [
    { src: '/MontabertIMG/untitled-12.jpg', alt: 'Excavadora con brise-roche Montabert operando en cantera de roca' },
    { src: '/MontabertIMG/Montabert-Brochure-Gama-Media-y-Pesada-1.jpg', alt: 'Brise-roche Montabert demoliendo muro de hormigón armado' },
    { src: '/MontabertIMG/Montabert-Brochure-Gama-Media-y-Pesada-5.jpg', alt: 'Brise-roche Montabert montado en excavadora, vista panorámica de cantera' },
    { src: '/MontabertIMG/Montabert-Brochure-Gama-Media-y-Pesada-6.jpg', alt: 'Brise-roche Montabert fracturando bloques de roca en cantera' },
  ];

  readonly products: MontabertProduct[] = [
    {
      range: 'Gama SC',
      models: 'SC 28  SC 55',
      weight: '28  55 kg',
      impact: 'Gama ligera',
      application: 'Trabajos de demolición ligera y excavación en espacios reducidos.',
      image: '/MontabertIMG/900x0_s3-29012-Montabert-V32-Hydraulic-Breaker.jpg',
    },
    {
      range: 'Gama V32',
      models: 'V 32',
      weight: '320 kg',
      impact: '1,350 J',
      application: 'Demolición media, construcción de carreteras y canteras de pequeño porte.',
      image: '/MontabertIMG/v45.jpg',
    },
    {
      range: 'Gama V45–V55',
      models: 'V 45 / V 55',
      weight: '450  550 kg',
      impact: '2,500  4,000 J',
      application: 'Demolición de hormigón armado y trabajos de minería ligera a media.',
      image: '/MontabertIMG/v55768x993.jpg',
    },
    {
      range: 'Gama V65+',
      models: 'V 65  V 150',
      weight: '650  1,500+ kg',
      impact: '8,000+ J',
      application: 'Minería y demolición pesada de alta exigencia. Máxima energía de impacto.',
      image: '/MontabertIMG/v65-1---website.jpg',
    },
  ];
}
