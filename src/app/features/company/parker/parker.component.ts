import { Component, ChangeDetectionStrategy, signal, OnDestroy, afterNextRender } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-parker',
  imports: [NgOptimizedImage, RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './parker.component.html',
  styleUrl: './parker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParkerComponent implements OnDestroy {

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
    { src: '/ParkerIMG/parker-nitrosource-sistema.jpeg',      alt: 'Sistema completo Parker NITROSource® con compresores Ingersoll Rand' },
    { src: '/ParkerIMG/parker-nitrosource-detalle.jpeg',      alt: 'Parker NITROSource®  detalle del generador de nitrógeno' },
    { src: '/ParkerIMG/parker-nitrosource-capacitacion.jpeg', alt: 'Capacitación técnica MINECON sobre Parker NITROSource®' },
    { src: '/ParkerIMG/parker-capacitacion-grupo.jpeg',       alt: 'Equipo técnico MINECON en capacitación oficial Parker Hannifin' },
  ];

  readonly transairFeatures = [
    { title: 'Instalación Rápida', desc: 'Sistema de tuberías modular que se instala hasta 4 veces más rápido que el acero tradicional.' },
    { title: 'Sin Corrosión', desc: 'Material de aluminio anodizado que elimina el óxido y la contaminación por partículas metálicas.' },
    { title: 'Máxima Eficiencia', desc: 'Paredes interiores lisas que reducen las caídas de presión y el consumo energético.' },
    { title: 'Modular y Flexible', desc: 'Sistema desmontable y reutilizable que se adapta a cualquier cambio de layout de planta.' },
  ];
}
