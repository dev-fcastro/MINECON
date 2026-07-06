import { Component, ChangeDetectionStrategy, signal, OnDestroy, afterNextRender } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-ingersoll-rand',
  imports: [NgOptimizedImage, RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './ingersoll-rand.component.html',
  styleUrl: './ingersoll-rand.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngersollRandComponent implements OnDestroy {

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
    { src: '/IngersollRandIMG/ingersollrand-rs315ne.jpeg',       alt: 'Ingersoll Rand RS315ne  compresor industrial de tornillo rotativo' },
    { src: '/IngersollRandIMG/ingersollrand-oilfree.jpeg',        alt: 'Ingersoll Rand compresor libre de aceite  instalación industrial' },
    { src: '/IngersollRandIMG/ingersollrand-parker-sistema.jpeg', alt: 'Sistema integrado Ingersoll Rand con generadores de nitrógeno Parker' },
    { src: '/IngersollRandIMG/historia_industrial_hero.jpg',      alt: 'Ingersoll Rand  más de un siglo de historia en ingeniería industrial' },
    { src: '/IngersollRandIMG/OilandGas.jpg',                     alt: 'Ingersoll Rand  soluciones para la industria de petróleo y gas' },
  ];

  readonly productLines = [
    {
      title: 'Compresores de Aceite',
      desc: 'Compresores de tornillo rotativo oil-flooded para aplicaciones industriales de alta demanda con máxima eficiencia.',
      image: '/IngersollRandIMG/OilFloodedAirCompressor.png',
      models: ['Oil-Flooded UP6/UP5', 'R-Series', 'N-Series'],
    },
    {
      title: 'Compresores Oil-Free',
      desc: 'Aire 100% libre de aceite para industrias farmacéuticas, alimentarias y de procesos donde la pureza es crítica.',
      image: '/IngersollRandIMG/OilFreeAirCompressor.png',
      models: ['Sierra™ Oil-Free', 'Nirvana® Oil-Free', 'Centrifugal C-Series'],
    },
    {
      title: 'Herramientas Neumáticas',
      desc: 'Más de 100 años de ingeniería neumática. Llaves de impacto, taladros, pulidoras y herramientas de sujeción para uso industrial.',
      image: '/IngersollRandIMG/iqv12_group_noshadow.jpg',
      models: ['IQv12 Serie', 'W7150', 'Herramientas de Precisión'],
    },
    {
      title: 'Soluciones de Elevación',
      desc: 'Polipastos y sistemas de elevación de cable de alambre y cadena para manejo seguro de cargas industriales.',
      image: '/IngersollRandIMG/hoist_wirerope_p001_copy.png',
      models: ['LODESTAR® LP', 'COFFING® JLC', 'Yale ERGO'],
    },
  ];

  readonly industries = [
    'Manufactura',
    'Minería',
    'Automotriz',
    'Aeroespacial',
    'Alimentaria',
    'Petróleo y Gas',
  ];
}
