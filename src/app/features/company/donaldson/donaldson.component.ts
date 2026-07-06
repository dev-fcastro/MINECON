import { Component, ChangeDetectionStrategy, signal, OnDestroy, afterNextRender } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-donaldson',
  imports: [NgOptimizedImage, RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './donaldson.component.html',
  styleUrl: './donaldson.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonaldsonComponent implements OnDestroy {

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
    { src: '/DonaldsonIMG/donaldson-colector-instalado.jpeg', alt: 'Colector de polvo Donaldson Torit instalado junto a silos de granos' },
    { src: '/DonaldsonIMG/donaldson-colector-grua.jpeg',      alt: 'Instalación del colector Donaldson con grúa telescópica' },
    { src: '/DonaldsonIMG/2011-install-2-u7434-fr2.jpg',      alt: 'Sistema de ductos y colección de polvo Donaldson en planta industrial' },
    { src: '/DonaldsonIMG/volantcai_2.jpg',                   alt: 'Detalle de medio filtrante plisado Donaldson' },
  ];

  readonly productLines = [
    {
      title: 'Filtros PowerCore®',
      desc: 'Tecnología de filtro plisado compacto Ultra-Web® para captura superior de partículas finas sin comprometer el caudal.',
      image: '/DonaldsonIMG/powercore_cased_c2-wbar.png',
      tag: 'Filtración Industrial',
    },
    {
      title: 'Colectores de Polvo',
      desc: 'Sistemas modulares Torit® Cabinet Collector para control de polvo en manufactura, soldadura, madera y metales.',
      image: '/DonaldsonIMG/cabinet_collector_series60__51299139629018812801280.png',
      tag: 'Colección de Polvo',
    },
    {
      title: 'Filtros de Cartucho DFT',
      desc: 'Filtros de cartucho plisado DFT para máxima eficiencia y larga vida útil en entornos de alta carga de polvo.',
      image: '/DonaldsonIMG/dft.png',
      tag: 'Cartucho / Plisado',
    },
    {
      title: 'Filtración Hidráulica',
      desc: 'Filtros para aceite hidráulico, combustible, refrigerante y agua de proceso en equipos pesados y móviles.',
      image: '/DonaldsonIMG/1151-hydrauliek-3.jpg',
      tag: 'Líquidos',
    },
  ];

  readonly stats = [
    { num: '1,300+', label: 'Científicos e ingenieros' },
    { num: '10', label: 'Centros de innovación' },
    { num: '150', label: 'Ubicaciones globales' },
    { num: '1915', label: 'Año de fundación' },
  ];
}
