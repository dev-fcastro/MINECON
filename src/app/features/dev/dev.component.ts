import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  SliderComponent,
  SliderImage,
} from '../../shared/components/structure-components/slider-componet/slider.component';
import {
  InfiniteLogoMarqueeComponent,
  MarqueeItem,
} from '../../shared/components/structure-components/infinitelogomarquee-component/infinitelogomarquee.component';
import { TextCarouselSliderComponent } from '../../shared/components/structure-components/textcarouselslider-component/textcarouselslider.component';
import { CallToActionComponent } from '../../shared/components/structure-components/calltoaction-component/calltoaction.component';
import { BtnComponent } from '../../shared/components/ux/buttons-components/btn-component/btn.component';
import { BtnBrandComponent } from '../../shared/components/ux/buttons-components/btnbrand-component/btnbrand.component';
import { BtnIconComponent } from '../../shared/components/ux/buttons-components/btnicon-component/btnicon.component';
import { InputFieldComponent } from '../../shared/components/ux/fiels-components/input-field-component/input-field.component';
import {
  PrimaryDropdownComponent,
  DropdownOption,
} from '../../shared/components/ux/dropdown-ncomponets/prymary-dropdown-component/primary-dropdown.component';
import { TitleComponent } from '../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../shared/components/ux/paragraph-component/paragraph.component';

@Component({
  selector: 'app-dev',
  imports: [
    SliderComponent,
    InfiniteLogoMarqueeComponent,
    TextCarouselSliderComponent,
    CallToActionComponent,
    BtnComponent,
    BtnBrandComponent,
    BtnIconComponent,
    InputFieldComponent,
    PrimaryDropdownComponent,
    TitleComponent,
    ParagraphComponent,
  ],
  templateUrl: './dev.component.html',
  styleUrl: './dev.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevComponent {
  readonly sliderImages: SliderImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop',
      alt: 'Excavadora de gran tonelaje en operación de minería a cielo abierto',
      caption: 'EC950E VOLVO CE — Capacidad de extracción 850 T/turno en operación continua',
      label: 'MINERÍA DE SUPERFICIE',
    },
    {
      url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1920&auto=format&fit=crop',
      alt: 'Taller industrial de mantenimiento de maquinaria pesada',
      caption: 'Línea de Servicio Técnico Certificado ISO 9001:2015 — MINECON WORKSHOP',
      label: 'TALLER CERTIFICADO',
    },
    {
      url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1920&auto=format&fit=crop',
      alt: 'Planta industrial de ensamblaje de chasis para maquinaria pesada',
      caption: 'Ensamblaje de chasis estructurales — Estándar SAE J1288 de alta resistencia',
      label: 'LÍNEA DE ENSAMBLAJE',
    },
    {
      url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1920&auto=format&fit=crop',
      alt: 'Camión minero de gran tonelaje ADT en operación de extracción',
      caption: 'CNHTC SITRAK ADT 45T — Rendimiento 18 ciclos/hr en banco de carga continua',
      label: 'TRANSPORTE MINERO',
    },
  ];

  readonly marqueeItems: MarqueeItem[] = [
    { name: 'Volvo Construction Equipment', logoSrc: '/VolvoConstructionEquipmentIMG/volvo-logo-texto.svg', route: '/marcas/volvo-construction-equipment' },
    { name: 'Bobcat',                       logoSrc: '/BobcatIMG/bobcat-logo-texto.png',                   route: '/marcas/bobcat' },
    { name: 'Montabert',                    logoSrc: '/MontabertIMG/montabert-logo-texto.png',             route: '/marcas/montabert' },
    { name: 'Michelin',                     logoSrc: '/MichelinIMG/michelin-logo-texto.png',               route: '/marcas/michelin' },
    { name: 'Sinotruk',                     logoSrc: '/SinotrukIMG/sinotruk-logo-texto.png',               route: '/marcas/sinotruk' },
    { name: 'GHH Rand',                     logoSrc: '/GHHRandIMG/ghhrand-logo-texto.webp',                 route: '/marcas/ghh-rand' },
    { name: 'Toku',                         logoSrc: '/TokuIMG/tuku-logo-texto.png',                       route: '/marcas/toku' },
    { name: 'Hiab',                         logoSrc: '/HiabIMG/hiab-logo-texto.svg',                       route: '/marcas/hiab' },
    { name: 'Ingersoll Rand',               logoSrc: '/IngersollRandIMG/ingersollrand-logo-texto.png',     route: '/marcas/ingersoll-rand' },
    { name: 'Donaldson',                    logoSrc: '/DonaldsonIMG/donaldson-logo-texto.svg',             route: '/marcas/donaldson' },
    { name: 'Parker',                       logoSrc: '/ParkerIMG/parker-logo-texto.png',                   route: '/marcas/parker' },
    { name: 'Firman',                       logoSrc: '/FirmanIMG/firman-logo-texto.svg',                   route: '/marcas/firman' },
    { name: 'Bull',                         logoSrc: '/BullIMG/bull-logo-texto.png',                       route: '/marcas/bull' },
  ];

  readonly tickerTexts: string[] = [
    'STOCK DISPONIBLE: 48 UNIDADES CAT 390F EN DESPACHO INMEDIATO',
    'CICLO DE MANTENIMIENTO PREVENTIVO — PRÓXIMA JORNADA: 24–26 JUN 2026',
    'NUEVA ALIANZA: MONTABERT — MINECON CHILE DISTRIBUIDOR OFICIAL CONO SUR',
    'RENDIMIENTO DE FLOTA: +12.4% Q1 2026 VS MISMO PERÍODO 2025',
    'CERTIFICACIÓN ISO 45001 RENOVADA — CERO ACCIDENTES TURNO NOCTURNO Q2 2026',
  ];

  readonly ctaBgUrl =
    'https://images.unsplash.com/photo-1581092783236-aefd3b1eb9f4?q=80&w=1920&auto=format&fit=crop';

  readonly equipOptions: DropdownOption[] = [
    { value: 'excavadora', label: 'Excavadora Hidráulica' },
    { value: 'cargador', label: 'Cargador Frontal' },
    { value: 'camion', label: 'Camión Minero ADT' },
    { value: 'perforadora', label: 'Perforadora Rotativa' },
    { value: 'martillo', label: 'Martillo Hidráulico MONTABERT' },
  ];
}
