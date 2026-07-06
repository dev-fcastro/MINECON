import { Component, ChangeDetectionStrategy, signal, OnDestroy, afterNextRender } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-hiab',
  imports: [NgOptimizedImage, RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './hiab.component.html',
  styleUrl: './hiab.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HiabComponent implements OnDestroy {

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
    { src: '/HiabIMG/moffett_mount_dismount.jpg', alt: 'Secuencia de montaje y desmontaje de una Moffett en la parte trasera de un camión' },
    { src: '/HiabIMG/1-0.jpg', alt: 'Moffett cargando un pallet de madera en obra' },
    { src: '/HiabIMG/moffett-m5-25-3-offroad-02-irl_1300px.jpg', alt: 'Moffett M5 25.3 con tracción 4WD en terreno irregular' },
    { src: '/HiabIMG/moffett-e4-6_urban-use_320x208.jpg', alt: 'Moffett E4 eléctrico en entrega urbana de última milla' },
    { src: '/HiabIMG/moffett-m4nx-industrial-use_320x208.jpg', alt: 'Moffett M4 NX operando en entorno industrial' },
  ];

  readonly useCases = [
    {
      title: 'Uso Urbano',
      desc: 'Entregas de última milla en ciudad. El Moffett E4 se monta/desmonta en segundos sin necesidad de grúa auxiliar.',
      image: '/HiabIMG/moffett-e4-6_urban-use_320x208.jpg',
    },
    {
      title: 'Industrial',
      desc: 'Para almacenes, plantas industriales y centros de distribución donde se requiere manejo de pallets con movilidad total.',
      image: '/HiabIMG/moffett-m4nx-industrial-use_320x208.jpg',
    },
    {
      title: 'Off-Road / Construcción',
      desc: 'El M5 25.3 con tracción 4WD para terrenos irregulares, obras de construcción y acceso en pendientes.',
      image: '/HiabIMG/moffett-m5-25-3-offroad-02-irl_1300px.jpg',
    },
    {
      title: 'Semi-Industrial',
      desc: 'Versatilidad entre entorno urbano y semi-rural. Alto rendimiento en distribución de materiales de construcción.',
      image: '/HiabIMG/moffett-m5-semi-industrial-use_320x208.jpg',
    },
  ];

  readonly models = [
    { name: 'Moffett E4', spec: 'Eléctrico / 2,000 kg', note: 'Cero emisiones, operación silenciosa' },
    { name: 'Moffett M4 NX', spec: 'Diésel / 2,000 kg', note: 'Alta productividad en entorno industrial' },
    { name: 'Moffett M5 25.3', spec: 'Diésel 4WD / 2,500 kg', note: 'Máxima tracción para terreno irregular' },
    { name: 'Moffett M8 70.3', spec: 'Diésel / 7,000 kg', note: 'Capacidad máxima para cargas pesadas' },
  ];
}
