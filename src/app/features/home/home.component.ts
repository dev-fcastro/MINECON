import { Component, ChangeDetectionStrategy, signal, computed, afterNextRender, inject, DestroyRef } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  InfiniteLogoMarqueeComponent,
  MarqueeItem,
} from '../../shared/components/structure-components/infinitelogomarquee-component/infinitelogomarquee.component';
import {
  BrandShowcaseComponent,
  BrandShowcaseItem,
} from '../../shared/components/structure-components/brandshowcase-component/brandshowcase.component';
import {
  SliderComponent,
  SliderImage,
} from '../../shared/components/structure-components/slider-componet/slider.component';
import { TitleComponent } from '../../shared/components/ux/title-component/title.component';
import { CallToActionComponent } from '../../shared/components/structure-components/calltoaction-component/calltoaction.component';
import {
  FeatureSplitComponent,
  FeatureSplitItem,
} from '../../shared/components/structure-components/feature-split-component/feature-split.component';
import { TextCarouselSliderComponent } from '../../shared/components/structure-components/textcarouselslider-component/textcarouselslider.component';
import { ServicesAccordionComponent } from '../../shared/components/structure-components/services-accordion-component/services-accordion.component';


export interface FeaturedEquipmentItem {
  title: string;
  brand: string;
  image: string;
  route: string;
}

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    RouterLink,
    InfiniteLogoMarqueeComponent,
    BrandShowcaseComponent,
    SliderComponent,
    TitleComponent,
    CallToActionComponent,
    FeatureSplitComponent,
    TextCarouselSliderComponent,
    ServicesAccordionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly destroyRef = inject(DestroyRef);

  readonly activeEquipIndex = signal(0);
  readonly activeEquip = computed(() => this.featuredMachinery[this.activeEquipIndex()]);

  constructor() {
    afterNextRender(() => {
      const id = setInterval(() => {
        this.activeEquipIndex.update(i => (i + 1) % this.featuredMachinery.length);
      }, 4000);
      this.destroyRef.onDestroy(() => clearInterval(id));
    });
  }

  readonly solutionSlides: SliderImage[] = [
    {
      url: '/IngersollRandIMG/CorpHeroBanners_DedicatedExperts.jpg',
      alt: 'Sistemas de aire comprimido y herramientas neumáticas industriales',
      label: 'División Industrial',
      caption: 'Nuestra división se enfoca en la distribución e instalación de sistemas de aire comprimido, satisfaciendo las necesidades de tratamiento, filtración y control de sistemas de vacío. Contamos con una alta gama de productos que abarcan desde compresores de tornillo rotativo, colectores de polvo, hasta líneas completas de herramientas neumáticas.',
      route: '/marcas',
      ctaLabel: 'Mostrar Marcas',
    },
    {
      url: '/VolvoConstructionEquipmentIMG/Megaprojects_Cairo_2019_03.jpg',
      alt: 'Equipos para construcción y minería en obra',
      label: 'División Construcción & Minería',
      caption: 'Somos una empresa líder en la venta y alquiler de equipos para la construcción y la minería, contamos con una reconocida línea de productos que destacan por su calidad y eficiencia, esta división satisface los requerimientos para los rubros enfocados a la extracción de agregados, construcción, compactación ligera, manipulación de concreto, excavación y movimiento de tierra.',
      route: '/marcas',
      ctaLabel: 'Mostrar Marcas',
    },
    {
      url: '/SinotrukIMG/sinotruk-img-header.png',
      alt: 'Vehículos de carga ligera y pesada Sinotruk',
      label: 'Vehículos Carga Ligera',
      caption: 'Nuestra división se enfoca en la distribución y comercialización de vehículos livianos y pesados satisfaciendo las necesidades del consumidor. Contamos con una alta gama de vehículos Sinotruk que abarcan desde camiones livianos hasta pesados.',
      route: '/marcas/sinotruk',
      ctaLabel: 'Mostrar Marcas',
    },
    {
      url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1400&auto=format&fit=crop',
      alt: 'Generadores eléctricos y equipos de energía Firman',
      label: 'División Energía',
      caption: 'Estamos comprometidos con llevar energía de calidad a nuestros consumidores bajo la marca FIRMAN, nos enfocamos en la distribución de generadores eléctricos, motobombas y motores estacionarios para diversas aplicaciones.',
      route: '/marcas/firman',
      ctaLabel: 'Mostrar Marcas',
    },
  ];

  readonly featuredMachinery: FeaturedEquipmentItem[] = [
    {
      title: 'Excavadora Hidráulica EC950E',
      brand: 'Volvo CE',
      image: '/VolvoConstructionEquipmentIMG/EXC_EC200E_T4f_2_W_RF.jpg',
      route: '/marcas/volvo-construction-equipment',
    },
    {
      title: 'Tractocamión HOWO T7H',
      brand: 'Sinotruk',
      image: '/SinotrukIMG/t7h-440-6x4.png',
      route: '/marcas/sinotruk',
    },
    {
      title: 'Minicargador S450',
      brand: 'Bobcat',
      image: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=1200&auto=format&fit=crop',
      route: '/marcas/bobcat',
    },
    {
      title: 'Generador T12000',
      brand: 'Firman',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop',
      route: '/marcas/firman',
    },
    {
      title: 'Compresor Portátil 185 CFM',
      brand: 'Ingersoll Rand',
      image: '/IngersollRandIMG/OilFloodedAirCompressor.png',
      route: '/marcas/ingersoll-rand',
    },
    {
      title: 'Neumáticos OTR para Minería',
      brand: 'Michelin',
      image: '/MichelinIMG/Minas-de-superficie_lightbox_full.jpg',
      route: '/marcas/michelin',
    },
  ];

  readonly serviceTickerTexts: string[] = [
    'SERVICIO TÉCNICO CERTIFICADO · DISPONIBILIDAD 24/7 EN CAMPO Y TALLER',
    'STOCK PERMANENTE DE REPUESTOS ORIGINALES PARA TODAS LAS MARCAS REPRESENTADAS',
    'PLANES DE MANTENIMIENTO PREVENTIVO · REDUZCA SUS COSTOS OPERATIVOS',
    'EFICIENCIA DE FLOTA · MONITOREO Y OPTIMIZACIÓN DEL CONSUMO DE COMBUSTIBLE',
    'SEGURIDAD INDUSTRIAL · PROGRAMAS DE GESTIÓN DE RIESGO CERTIFICADOS',
  ];

  readonly featureItems: FeatureSplitItem[] = [
    {
      title: 'Maquinaria Pesada para Proyectos de Gran Escala',
      description:
        'Representamos las marcas más reconocidas del mercado global en maquinaria de construcción, minería y movimiento de tierra. Desde excavadoras hidráulicas hasta compactadoras y cargadores frontales, contamos con el equipo adecuado para cada proyecto.',
      image: '/VolvoConstructionEquipmentIMG/ART_A60H_Customer_GB_008_EMEA.jpg',
      imageAlt: 'Maquinaria pesada de construcción en obra',
      route: '/productos',
      ctaLabel: 'Ver catálogo',
    },
    {
      title: 'Soluciones de Transporte Industrial para la República Dominicana',
      description:
        'Con Sinotruk, ofrecemos camiones de volteo, tractocamiones y camiones de carga pesada diseñados para las exigencias del mercado dominicano. Potencia, durabilidad y servicio posventa garantizado.',
      image: '/SinotrukIMG/camions_sinotruck.jpg',
      imageAlt: 'Camión de transporte industrial en carretera',
      route: '/marcas/sinotruk',
      ctaLabel: 'Conocer Sinotruk',
    },
    {
      title: 'Repuestos Originales y Servicio Técnico Certificado',
      description:
        'Nuestro taller especializado y red de técnicos certificados garantiza la continuidad de sus operaciones. Disponemos de stock de repuestos originales y ofrecemos contratos de mantenimiento preventivo para toda la flota.',
      image: '/VolvoConstructionEquipmentIMG/Services_Machine_Operator_Training_H_H_02.jpg',
      imageAlt: 'Técnico especializado en mantenimiento de maquinaria',
      route: '/servicios',
      ctaLabel: 'Nuestros Servicios',
    },
  ];

  readonly showcaseItems: BrandShowcaseItem[] = [
    {
      name: 'Volvo Construction Equipment',
      logoSrc: '/VolvoConstructionEquipmentIMG/volvo-imagen-completa-logo.png',
      route: '/marcas/volvo-construction-equipment',
      logoWidth: 200, logoHeight: 48,
      categories: ['Excavadoras', 'Cargadores Frontales', 'Compactadoras', 'Pavimentadoras'],
      ctaLabel: 'Ver catálogo',
      bgImage: '/VolvoConstructionEquipmentIMG/Megaprojects_Cairo_2019_03.jpg',
    },
    {
      name: 'Sinotruk',
      logoSrc: '/SinotrukIMG/sinotruk-logo-texto.png',
      route: '/marcas/sinotruk',
      logoWidth: 200, logoHeight: 48,
      categories: ['Camiones de Volteo', 'Tractocamiones', 'Camiones de Carga Pesada'],
      ctaLabel: 'Ver catálogo',
      bgImage: '/SinotrukIMG/sinotruk-img-header.png',
    },
    {
      name: 'Ingersoll Rand',
      logoSrc: '/IngersollRandIMG/ingersollrand-logo-texto.png',
      route: '/marcas/ingersoll-rand',
      logoWidth: 200, logoHeight: 48,
      categories: ['Compresores Portátiles', 'Herramientas Neumáticas', 'Sistemas de Aire Comprimido'],
      ctaLabel: 'Ver catálogo',
      bgImage: '/IngersollRandIMG/CorpHeroBanners_DedicatedExperts.jpg',
    },
  ];

  readonly marqueeItems: MarqueeItem[] = [
    { name: 'Volvo Construction Equipment', logoSrc: '/VolvoConstructionEquipmentIMG/volvo-imagen-completa-logo.png', route: '/marcas/volvo-construction-equipment', logoWidth: 180, logoHeight: 60 },
    { name: 'Bobcat',                       logoSrc: '/BobcatIMG/bobcat-logo-texto.png',                   route: '/marcas/bobcat',                       logoWidth: 180, logoHeight: 60 },
    { name: 'Montabert',                    logoSrc: '/MontabertIMG/montabert-logo-texto.png',             route: '/marcas/montabert',                    logoWidth: 180, logoHeight: 60 },
    { name: 'Michelin',                     logoSrc: '/MichelinIMG/michelin-logo-texto.png',               route: '/marcas/michelin',                     logoWidth: 180, logoHeight: 60 },
    { name: 'Sinotruk',                     logoSrc: '/SinotrukIMG/sinotruk-logo-texto.png',               route: '/marcas/sinotruk',                     logoWidth: 180, logoHeight: 60 },
    { name: 'GHH Rand',                     logoSrc: '/GHHRandIMG/ghhrand-logo-texto.webp',                 route: '/marcas/ghh-rand',                     logoWidth: 180, logoHeight: 60 },
    { name: 'Toku',                         logoSrc: '/TokuIMG/tuku-logo-texto.png',                       route: '/marcas/toku',                         logoWidth: 180, logoHeight: 60 },
    { name: 'Hiab',                         logoSrc: '/HiabIMG/hiab-logo-texto.svg',                       route: '/marcas/hiab',                         logoWidth: 180, logoHeight: 60 },
    { name: 'Ingersoll Rand',               logoSrc: '/IngersollRandIMG/ingersollrand-logo-texto.png',     route: '/marcas/ingersoll-rand',               logoWidth: 180, logoHeight: 60 },
    { name: 'Donaldson',                    logoSrc: '/DonaldsonIMG/donaldson-logo-texto.svg',             route: '/marcas/donaldson',                    logoWidth: 180, logoHeight: 60 },
    { name: 'Parker',                       logoSrc: '/ParkerIMG/parker-logo-texto.png',                   route: '/marcas/parker',                       logoWidth: 180, logoHeight: 60 },
    { name: 'Firman',                       logoSrc: '/FirmanIMG/firman-logo-texto.svg',                   route: '/marcas/firman',                       logoWidth: 180, logoHeight: 60 },
    { name: 'Bull',                         logoSrc: '/BullIMG/bull-logo-texto.png',                       route: '/marcas/bull',                         logoWidth: 180, logoHeight: 60 },
  ];
}
