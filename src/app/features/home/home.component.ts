import { Component, ChangeDetectionStrategy } from '@angular/core';
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
import { MachineryCardComponent } from '../../shared/components/ux/machinery-card-component/machinery-card.component';
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


export interface FeaturedEquipmentItem {
  title: string;
  brand: string;
  image: string;
  route: string;
  specs: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
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
    MachineryCardComponent,
    TitleComponent,
    CallToActionComponent,
    FeatureSplitComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly solutionSlides: SliderImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',
      alt: 'Sistemas de aire comprimido y herramientas neumáticas industriales',
      label: 'División Industrial',
      caption: 'Nuestra división se enfoca en la distribución e instalación de sistemas de aire comprimido, satisfaciendo las necesidades de tratamiento, filtración y control de sistemas de vacío. Contamos con una alta gama de productos que abarcan desde compresores de tornillo rotativo, colectores de polvo, hasta líneas completas de herramientas neumáticas.',
      route: '/marcas',
      ctaLabel: 'Mostrar Marcas',
    },
    {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop',
      alt: 'Equipos para construcción y minería en obra',
      label: 'División Construcción & Minería',
      caption: 'Somos una empresa líder en la venta y alquiler de equipos para la construcción y la minería, contamos con una reconocida línea de productos que destacan por su calidad y eficiencia, esta división satisface los requerimientos para los rubros enfocados a la extracción de agregados, construcción, compactación ligera, manipulación de concreto, excavación y movimiento de tierra.',
      route: '/marcas',
      ctaLabel: 'Mostrar Marcas',
    },
    {
      url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1400&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1579616790875-af7fbc5a5cf2?q=80&w=800&auto=format&fit=crop',
      route: '/marcas/volvo-construction-equipment',
      specs: ['Peso de operación: 95,000 kg', 'Capacidad del balde: 5.6 m³', 'Motor Volvo D16 de 603 hp'],
    },
    {
      title: 'Camión de Volteo HOWO 6x4',
      brand: 'Sinotruk',
      image: 'https://images.unsplash.com/photo-1592838064808-0203d267e3e3?q=80&w=800&auto=format&fit=crop',
      route: '/marcas/sinotruk',
      specs: ['Capacidad de carga: 25 toneladas', 'Motor Sinotruk D12 de 420 hp', 'Estructura reforzada para minería'],
    },
    {
      title: 'Minicargador S450',
      brand: 'Bobcat',
      image: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=800&auto=format&fit=crop',
      route: '/marcas/bobcat',
      specs: ['Carga nominal: 608 kg', 'Caudal hidráulico estándar: 64 L/min', 'Cabina sellada y presurizada'],
    },
    {
      title: 'Generador Diésel Profesional',
      brand: 'Firman',
      image: 'https://images.unsplash.com/photo-1597843797221-54191d9d9847?q=80&w=800&auto=format&fit=crop',
      route: '/marcas/firman',
      specs: ['Potencia nominal: 10 kVA', 'Motor diésel insonorizado de 4 tiempos', 'Panel digital multifunción'],
    },
    {
      title: 'Compresor Portátil 185 CFM',
      brand: 'Ingersoll Rand',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
      route: '/marcas/ingersoll-rand',
      specs: ['Caudal de aire: 185 CFM a 100 psi', 'Motor diésel Yanmar de alta eficiencia', 'Chasis remolcable para carretera'],
    },
    {
      title: 'Sistemas e Hidráulica Premium',
      brand: 'Parker',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
      route: '/marcas/parker',
      specs: ['Mangueras y conexiones de alta presión', 'Sistemas de filtración hidráulica industrial', 'Válvulas y actuadores robustos'],
    },
  ];

  readonly servicesData: ServiceItem[] = [
    {
      title: 'Repuestos',
      description: 'Catálogo completo de repuestos originales para todas nuestras marcas representadas con entrega rápida.',
      route: '/repuestos',
    },
    {
      title: 'Taller',
      description: 'Servicio de mantenimiento preventivo y correctivo con técnicos certificados en taller o campo.',
      route: '/servicios',
    },
    {
      title: 'Alquiler',
      description: 'Amplia flota de alquiler de maquinaria pesada y equipos industriales listos para operar.',
      route: '/alquiler',
    },
    {
      title: 'Soporte',
      description: 'Asistencia técnica especializada 24/7 para garantizar la continuidad de sus operaciones.',
      route: '/servicios',
    },
  ];

  readonly featureItems: FeatureSplitItem[] = [
    {
      title: 'Maquinaria Pesada para Proyectos de Gran Escala',
      description:
        'Representamos las marcas más reconocidas del mercado global en maquinaria de construcción, minería y movimiento de tierra. Desde excavadoras hidráulicas hasta compactadoras y cargadores frontales, contamos con el equipo adecuado para cada proyecto.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Maquinaria pesada de construcción en obra',
      route: '/productos',
      ctaLabel: 'Ver catálogo',
    },
    {
      title: 'Soluciones de Transporte Industrial para la República Dominicana',
      description:
        'Con Sinotruk, ofrecemos camiones de volteo, tractocamiones y camiones de carga pesada diseñados para las exigencias del mercado dominicano. Potencia, durabilidad y servicio posventa garantizado.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Camión de transporte industrial en carretera',
      route: '/marcas/sinotruk',
      ctaLabel: 'Conocer Sinotruk',
    },
    {
      title: 'Repuestos Originales y Servicio Técnico Certificado',
      description:
        'Nuestro taller especializado y red de técnicos certificados garantiza la continuidad de sus operaciones. Disponemos de stock de repuestos originales y ofrecemos contratos de mantenimiento preventivo para toda la flota.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Técnico especializado en mantenimiento de maquinaria',
      route: '/servicios',
      ctaLabel: 'Nuestros Servicios',
    },
  ];

  readonly showcaseItems: BrandShowcaseItem[] = [
    {
      name: 'Volvo Construction Equipment',
      logoSrc: '/VolvoConstructionEquipmentIMG/volvo-logo-texto.svg',
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
      categories: ['Compresores Portátiles', 'Herramientas Neumáticas', 'Sistemas de Aire Comprimido'],
      ctaLabel: 'Ver catálogo',
      bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  readonly marqueeItems: MarqueeItem[] = [
    { name: 'Volvo Construction Equipment', logoSrc: '/VolvoConstructionEquipmentIMG/volvo-logo-texto.svg', route: '/marcas/volvo-construction-equipment', logoWidth: 180, logoHeight: 60 },
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
