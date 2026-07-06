import { Component, ChangeDetectionStrategy, signal, OnDestroy, afterNextRender } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

interface BobcatProduct {
  title: string;
  desc: string;
  iconPath: string;
  route: string;
}

@Component({
  selector: 'app-bobcat',
  imports: [NgOptimizedImage, RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './bobcat.component.html',
  styleUrl: './bobcat.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BobcatComponent implements OnDestroy {

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
    { src: '/BobcatIMG/bobcat-pa185-blanco.jpeg', alt: 'Bobcat PA185  compresor de aire portátil, vista de estudio' },
    { src: '/BobcatIMG/bobcat-pa185-instalacion.jpeg', alt: 'Bobcat PA185  instalación en taller MINECON con accesorios' },
  ];

  readonly products: BobcatProduct[] = [
    {
      title: 'Cargadores Compactos',
      desc: 'Rendimiento, confiabilidad y comodidad en la marca más confiable de cargadores compactos.',
      iconPath: 'M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.3.07-.62.07-.96 0-.34-.03-.66-.07-1l2.16-1.68c.2-.16.25-.44.12-.66l-2.04-3.54c-.13-.22-.41-.3-.63-.22l-2.54 1.03c-.54-.42-1.12-.76-1.74-1.04l-.38-2.68C14.16 3.26 14 3.1 13.76 3H10.24c-.24 0-.4.16-.44.4l-.38 2.68c-.62.28-1.2.62-1.74 1.04L5.14 6.09c-.22-.08-.5 0-.63.22L2.47 9.85c-.13.22-.08.5.12.66l2.16 1.68c-.04.34-.07.67-.07 1 0 .33.03.66.07.96l-2.16 1.68c-.2.16-.25.44-.12.66l2.04 3.54c.13.22.41.3.63.22l2.54-1.03c.54.42 1.12.76 1.74 1.04l.38 2.68c.04.24.2.4.44.4h3.52c.24 0 .4-.16.44-.4l.38-2.68c.62-.28 1.2-.62 1.74-1.04l2.54 1.03c.22.08.5 0 .63-.22l2.04-3.54c.13-.22.08-.5-.12-.66l-2.16-1.68z',
      route: '/contacto',
    },
    {
      title: 'Mini Excavadoras',
      desc: 'Excavadoras compactas con clase mundial de rendimiento y productividad.',
      iconPath: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
      route: '/contacto',
    },
    {
      title: 'Telehandlers',
      desc: 'Alto rendimiento pero económico, ideal para trabajar en condiciones difíciles.',
      iconPath: 'M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z',
      route: '/contacto',
    },
    {
      title: 'Vehículos Utilitarios',
      desc: 'Diseñados para personas que necesitan hacer el trabajo, con alto nivel de confort.',
      iconPath: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z',
      route: '/contacto',
    },
    {
      title: 'Toolcat / Work Machines',
      desc: 'Varias máquinas combinadas en una sola plataforma multiusos.',
      iconPath: 'M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z',
      route: '/contacto',
    },
    {
      title: 'Accesorios e Implementos',
      desc: 'Más de 100 accesorios para ampliar la versatilidad de cada equipo Bobcat.',
      iconPath: 'M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z',
      route: '/contacto',
    },
  ];
}
