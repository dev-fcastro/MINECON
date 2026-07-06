import { Component, ChangeDetectionStrategy, OnDestroy, afterNextRender, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

interface VolvoCEProduct {
  title: string;
  subtitle: string;
  image: string;
  route: string;
}

@Component({
  selector: 'app-volvo-construction-equipment',
  imports: [NgOptimizedImage, RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './volvo-construction-equipment.component.html',
  styleUrl: './volvo-construction-equipment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolvoConstructionEquipmentComponent implements OnDestroy {

  readonly currentSlide = signal(0);
  private autoTimer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    afterNextRender(() => this.startAuto());
  }

  ngOnDestroy(): void { this.stopAuto(); }

  prev(): void { this.currentSlide.update(i => (i - 1 + this.fieldPhotos.length) % this.fieldPhotos.length); this.resetAuto(); }
  next(): void { this.currentSlide.update(i => (i + 1) % this.fieldPhotos.length); this.resetAuto(); }
  goTo(i: number): void { this.currentSlide.set(i); this.resetAuto(); }
  pauseAuto(): void { this.stopAuto(); }
  resumeAuto(): void { this.startAuto(); }

  private startAuto(): void {
    this.autoTimer = setInterval(() => {
      this.currentSlide.update(i => (i + 1) % this.fieldPhotos.length);
    }, 4500);
  }
  private stopAuto(): void {
    if (this.autoTimer !== null) { clearInterval(this.autoTimer); this.autoTimer = null; }
  }
  private resetAuto(): void { this.stopAuto(); this.startAuto(); }

  readonly fieldPhotos = [
    { src: '/VolvoConstructionEquipmentIMG/volvo-ec-a30g-promo.jpeg',   alt: 'Excavadora Volvo CE con camión articulado A30G' },
    { src: '/VolvoConstructionEquipmentIMG/volvo-excavadora-rd.jpeg',   alt: 'Volvo CE en obras frente al Arco de Santo Domingo' },
    { src: '/VolvoConstructionEquipmentIMG/volvo-ec290-desmonte.jpeg',  alt: 'Volvo EC290 despejando vegetación' },
    { src: '/VolvoConstructionEquipmentIMG/volvo-ec210d-rio.jpeg',      alt: 'Volvo EC210D trabajando en cauce de río' },
    { src: '/VolvoConstructionEquipmentIMG/volvo-ec-montana.jpeg',      alt: 'Volvo CE en carretera de montaña' },
    { src: '/VolvoConstructionEquipmentIMG/volvo-sd110b-rodillo.jpeg',  alt: 'Rodillo compactador Volvo SD110B' },
    { src: '/VolvoConstructionEquipmentIMG/volvo-ec200d-cielo.jpeg',    alt: 'Volvo EC200D  vista dramática cielo' },
    { src: '/VolvoConstructionEquipmentIMG/volvo-ec-suelo-rojo.jpeg',   alt: 'Excavadora Volvo CE en tierra roja' },
    { src: '/VolvoConstructionEquipmentIMG/volvo-excavadora-cielo.jpeg', alt: 'Excavadora Volvo CE  cielo dramático' },
  ];

  readonly products: VolvoCEProduct[] = [
    {
      title: 'Excavadoras',
      subtitle: 'Serie EC  potencia, precisión y bajo consumo',
      image: '/VolvoConstructionEquipmentIMG/EXC_EC200E_T4f_2_W_RF.jpg',
      route: '/contacto',
    },
    {
      title: 'Cargadores Frontales',
      subtitle: 'Serie L  rendimiento óptimo en carga y acarreo',
      image: '/VolvoConstructionEquipmentIMG/WLO_L90H_T4f_1_W_29424.jpg',
      route: '/contacto',
    },
    {
      title: 'Compactadores',
      subtitle: 'Serie SD/DD  compactación de suelos y asfalto',
      image: '/VolvoConstructionEquipmentIMG/COS_SD160B_T4f_W_LF.jpg',
      route: '/contacto',
    },
    {
      title: 'Articulados',
      subtitle: 'Serie A  acarreo en terrenos difíciles',
      image: '/VolvoConstructionEquipmentIMG/ART_A40G_StageV_2_W_2018_10_LF.jpg',
      route: '/contacto',
    },
    {
      title: 'Tiendetubos',
      subtitle: 'Serie PL  precisión en tendido de tuberías',
      image: '/VolvoConstructionEquipmentIMG/PIP_PL3005E_1_W_LF.jpg',
      route: '/contacto',
    },
    {
      title: 'Minicargadores',
      subtitle: 'Serie MC  versatilidad máxima en espacios reducidos',
      image: '/VolvoConstructionEquipmentIMG/SSL_MC105C_T4f_1_W_LF.jpg',
      route: '/contacto',
    },
  ];

  readonly stats = [
    { num: '175+', label: 'Años de innovación' },
    { num: '190', label: 'Mercados globales' },
    { num: '13,000+', label: 'Técnicos certificados' },
    { num: '#1', label: 'En satisfacción de cliente' },
  ];
}
