import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  InfiniteLogoMarqueeComponent,
  MarqueeItem,
} from '../../shared/components/structure-components/infinitelogomarquee-component/infinitelogomarquee.component';
import {
  BrandShowcaseComponent,
  BrandShowcaseItem,
} from '../../shared/components/structure-components/brandshowcase-component/brandshowcase.component';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, InfiniteLogoMarqueeComponent, BrandShowcaseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
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
