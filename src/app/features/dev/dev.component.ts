import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

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
import { ServicesAccordionComponent } from '../../shared/components/structure-components/services-accordion-component/services-accordion.component';
import {
  BrandShowcaseComponent,
  BrandShowcaseItem,
} from '../../shared/components/structure-components/brandshowcase-component/brandshowcase.component';
import {
  FeatureSplitComponent,
  FeatureSplitItem,
} from '../../shared/components/structure-components/feature-split-component/feature-split.component';
import { CategoryCardComponent } from '../../shared/components/ux/category-card-component/category-card.component';

@Component({
  selector: 'app-dev',
  imports: [
    RouterLink,
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
    ServicesAccordionComponent,
    BrandShowcaseComponent,
    FeatureSplitComponent,
    CategoryCardComponent,
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
      caption: 'EC950E VOLVO CE  Capacidad de extracción 850 T/turno en operación continua',
      label: 'MINERÍA DE SUPERFICIE',
    },
    {
      url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1920&auto=format&fit=crop',
      alt: 'Taller industrial de mantenimiento de maquinaria pesada',
      caption: 'Línea de Servicio Técnico Certificado ISO 9001:2015  MINECON WORKSHOP',
      label: 'TALLER CERTIFICADO',
    },
    {
      url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1920&auto=format&fit=crop',
      alt: 'Planta industrial de ensamblaje de chasis para maquinaria pesada',
      caption: 'Ensamblaje de chasis estructurales  Estándar SAE J1288 de alta resistencia',
      label: 'LÍNEA DE ENSAMBLAJE',
    },
    {
      url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1920&auto=format&fit=crop',
      alt: 'Camión minero de gran tonelaje ADT en operación de extracción',
      caption: 'CNHTC SITRAK ADT 45T  Rendimiento 18 ciclos/hr en banco de carga continua',
      label: 'TRANSPORTE MINERO',
    },
  ];

  readonly marqueeItems: MarqueeItem[] = [
    { name: 'Volvo Construction Equipment', logoSrc: '/VolvoConstructionEquipmentIMG/volvo-imagen-completa-logo.png', route: '/marcas/volvo-construction-equipment' },
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
    'CICLO DE MANTENIMIENTO PREVENTIVO  PRÓXIMA JORNADA: 24–26 JUN 2026',
    'NUEVA ALIANZA: MONTABERT  MINECON CHILE DISTRIBUIDOR OFICIAL CONO SUR',
    'RENDIMIENTO DE FLOTA: +12.4% Q1 2026 VS MISMO PERÍODO 2025',
    'CERTIFICACIÓN ISO 45001 RENOVADA  CERO ACCIDENTES TURNO NOCTURNO Q2 2026',
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

  readonly showcaseItems: BrandShowcaseItem[] = [
    {
      name: 'Volvo Construction Equipment',
      logoSrc: '/VolvoConstructionEquipmentIMG/volvo-imagen-completa-logo.png',
      route: '/marcas/volvo-construction-equipment',
      logoWidth: 200, logoHeight: 48,
      categories: ['Excavadoras', 'Cargadores Frontales', 'Compactadoras', 'Pavimentadoras'],
      ctaLabel: 'Ver catálogo',
      bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Sinotruk',
      logoSrc: '/SinotrukIMG/sinotruk-logo-texto.png',
      route: '/marcas/sinotruk',
      logoWidth: 200, logoHeight: 48,
      categories: ['Camiones de Volteo', 'Tractocamiones', 'Camiones de Carga Pesada'],
      ctaLabel: 'Ver catálogo',
      bgImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Ingersoll Rand',
      logoSrc: '/IngersollRandIMG/ingersollrand-logo-texto.png',
      route: '/marcas/ingersoll-rand',
      logoWidth: 200, logoHeight: 48,
      categories: ['Compresores Portátiles', 'Herramientas Neumáticas', 'Sistemas de Vacío'],
      ctaLabel: 'Ver catálogo',
      bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  readonly featureSplitItems: FeatureSplitItem[] = [
    {
      eyebrow: 'Construcción & Minería',
      title: 'Maquinaria Pesada para Proyectos de Gran Escala',
      description: 'Representamos las marcas más reconocidas del mercado global en maquinaria de construcción y minería. Desde excavadoras hidráulicas hasta compactadoras y cargadores frontales.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Maquinaria pesada de construcción en obra',
      route: '/productos',
      ctaLabel: 'Ver catálogo',
    },
    {
      eyebrow: 'Transporte Industrial',
      title: 'Vehículos de Carga Pesada Sinotruk',
      description: 'Camiones de volteo, tractocamiones y camiones de carga pesada diseñados para las exigencias del mercado. Potencia, durabilidad y servicio posventa garantizado.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Camión de transporte industrial en carretera',
      route: '/marcas/sinotruk',
      ctaLabel: 'Conocer Sinotruk',
    },
    {
      eyebrow: 'Servicio Técnico',
      title: 'Repuestos Originales y Mantenimiento Certificado',
      description: 'Nuestro taller especializado garantiza la continuidad de sus operaciones con repuestos originales y contratos de mantenimiento preventivo para toda la flota.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Técnico especializado en mantenimiento de maquinaria',
      route: '/servicios',
      ctaLabel: 'Nuestros Servicios',
    },
  ];

  readonly categoryCards = [
    { title: 'Camiones de Volteo', bgImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop', route: '/marcas/sinotruk' },
    { title: 'Excavadoras Hidráulicas', bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop', route: '/marcas/volvo-construction-equipment' },
    { title: 'Minicargadores', bgImage: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=800&auto=format&fit=crop', route: '/marcas/bobcat' },
    { title: 'Compresores de Aire', bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop', route: '/marcas/ingersoll-rand' },
    { title: 'Generadores Eléctricos', bgImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop', route: '/marcas/firman' },
    { title: 'Neumáticos OTR', bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop', route: '/marcas/michelin' },
  ];
}
