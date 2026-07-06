import { Component, ChangeDetectionStrategy, signal, OnDestroy, afterNextRender } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-bull',
  imports: [NgOptimizedImage, RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './bull.component.html',
  styleUrl: './bull.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BullComponent implements OnDestroy {

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
    { src: '/BullIMG/bull-cmt-site.jpeg',  alt: 'Bull CMT retroexcavadora en obra de construcción' },
    { src: '/BullIMG/bull-hd-promo.jpeg',   alt: 'Bull HD retroexcavadora  imagen promocional' },
    { src: '/BullIMG/bull-cmt-front.jpeg',  alt: 'Bull CMT  vista frontal con cazo y martillo' },
    { src: '/BullIMG/bull-skid-broom.jpeg', alt: 'Bull mini cargador con accesorio escoba industrial' },
  ];

  readonly equipment = [
    {
      title: 'Backhoe Loaders',
      desc: 'Tractoras con retroexcavadora  versatilidad máxima para excavación, carga y movimiento de tierra en un solo equipo.',
      iconPath: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
      models: ['BULL BS 76E', 'BULL BS 80E', 'BULL BS Grand Series', 'BULL High Speed Series'],
    },
    {
      title: 'Skid Steer Loaders',
      desc: 'Minicargadores de giro cero para trabajo en espacios confinados, demolición y movimiento de materiales.',
      iconPath: 'M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.87 5.87 0 0 1 6 12c0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z',
      models: ['BULL BSD Series', 'BULL Smart 80'],
    },
    {
      title: 'Bucket Options',
      desc: 'Más de 8 tipos de baldes intercambiables para cada aplicación: obra, minería, demolición y manejo de residuos.',
      iconPath: 'M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-9 12.5v-2h2v2h4l-5 5-5-5h4zM4 4h16v3.01H4V4z',
      models: ['GP Bucket', 'Rock Bucket', '4-in-1 Clam', 'Trenching', 'Grabbing Fork'],
    },
  ];

  readonly industries = [
    'Construcción', 'Agricultura', 'Reciclaje y Demolición',
    'Paisajismo', 'Minería de Agregados', 'Infraestructura',
  ];

  readonly stats = [
    { num: '56,000+', label: 'Clientes globales' },
    { num: '150+', label: 'Distribuidores' },
    { num: '40+', label: 'Años de manufactura' },
    { num: '2,200', label: 'Empleados' },
  ];
}
