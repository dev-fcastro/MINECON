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
import { CategoryCardComponent } from '../../shared/components/ux/category-card-component/category-card.component';
import { MachineryCardComponent } from '../../shared/components/ux/machinery-card-component/machinery-card.component';
import { TitleComponent } from '../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../shared/components/structure-components/calltoaction-component/calltoaction.component';

export interface CategoryItem {
  title: string;
  bgImage: string;
  route: string;
}

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
    CategoryCardComponent,
    MachineryCardComponent,
    TitleComponent,
    ParagraphComponent,
    CallToActionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly categoriesData: CategoryItem[] = [
    {
      title: 'Construcción',
      bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
      route: '/productos',
    },
    {
      title: 'Minería',
      bgImage: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=800&auto=format&fit=crop',
      route: '/productos',
    },
    {
      title: 'Transporte',
      bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop',
      route: '/productos',
    },
    {
      title: 'Energía',
      bgImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
      route: '/productos',
    },
    {
      title: 'Industrial',
      bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
      route: '/productos',
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
      name: 'Michelin',
      logoSrc: '/MichelinIMG/michelin-logo-texto.png',
      route: '/marcas/michelin',
      logoWidth: 180, logoHeight: 48,
      categories: ['Neumáticos OTR', 'Neumáticos Industriales', 'Neumáticos para Minería'],
      ctaLabel: 'Ver catálogo',
      bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  readonly marqueeItems: MarqueeItem[] = [
    { name: 'Volvo Construction Equipment', logoSrc: '/VolvoConstructionEquipmentIMG/volvo-logo-texto.svg', route: '/marcas/volvo-construction-equipment', logoWidth: 180, logoHeight: 60 },
    { name: 'Bobcat',                       logoSrc: '/BobcatIMG/bobcat-logo-texto.png',                   route: '/marcas/bobcat',                       logoWidth: 180, logoHeight: 60 },
    { name: 'Montabert',                    logoSrc: '/MontabertIMG/montabert-logo-texto.png',             route: '/marcas/montabert',                    logoWidth: 180, logoHeight: 60 },
    { name: 'Michelin',                     logoSrc: '/MichelinIMG/michelin-logo-texto.png',               route: '/marcas/michelin',                     logoWidth: 180, logoHeight: 60 },
    { name: 'Sinotruk',                     logoSrc: '/SinotrukIMG/sinotruk-logo-texto.png',               route: '/marcas/sinotruk',                     logoWidth: 180, logoHeight: 60 },
    { name: 'GHH Rand',                     logoSrc: '/GHHRandIMG/ghhrand-logo-texto.png',                 route: '/marcas/ghh-rand',                     logoWidth: 180, logoHeight: 60 },
    { name: 'Toku',                         logoSrc: '/TokuIMG/tuku-logo-texto.png',                       route: '/marcas/toku',                         logoWidth: 180, logoHeight: 60 },
    { name: 'Hiab',                         logoSrc: '/HiabIMG/hiab-logo-texto.png',                       route: '/marcas/hiab',                         logoWidth: 180, logoHeight: 60 },
    { name: 'Ingersoll Rand',               logoSrc: '/IngersollRandIMG/ingersollrand-logo-texto.png',     route: '/marcas/ingersoll-rand',               logoWidth: 180, logoHeight: 60 },
    { name: 'Donaldson',                    logoSrc: '/DonaldsonIMG/donaldson-logo-texto.png',             route: '/marcas/donaldson',                    logoWidth: 180, logoHeight: 60 },
    { name: 'Parker',                       logoSrc: '/ParkerIMG/parker-logo-texto.png',                   route: '/marcas/parker',                       logoWidth: 180, logoHeight: 60 },
    { name: 'Firman',                       logoSrc: '/FirmanIMG/firman-logo-texto.png',                   route: '/marcas/firman',                       logoWidth: 180, logoHeight: 60 },
    { name: 'Bull',                         logoSrc: '/BullIMG/bull-logo-texto.png',                       route: '/marcas/bull',                         logoWidth: 180, logoHeight: 60 },
  ];
}
