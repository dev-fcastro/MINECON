import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SliderComponent, SliderImage } from '../../shared/components/structure-components/slider-componet/slider.component';
import { TitleComponent } from '../../shared/components/ux/title-component/title.component';
import { BrandShowcaseComponent, BrandShowcaseItem } from '../../shared/components/structure-components/brandshowcase-component/brandshowcase.component';
import { CallToActionComponent } from '../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-marcas',
  imports: [
    RouterLink,
    SliderComponent,
    TitleComponent,
    BrandShowcaseComponent,
    CallToActionComponent,
  ],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarcasComponent {
  readonly heroSlides: SliderImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop',
      alt: 'Maquinaria pesada — marcas líderes mundiales representadas por MINECON',
      label: 'RENDIMIENTO PODEROSO',
      caption: 'Representamos las marcas más reconocidas del mercado global en maquinaria industrial, construcción, minería, energía y transporte.',
    },
  ];

  // Split in two rows: 7 + 6 to keep panel widths comfortable
  readonly brandsRow1: BrandShowcaseItem[] = [
    {
      name: 'Volvo Construction Equipment',
      logoSrc: '/VolvoConstructionEquipmentIMG/volvo-logo-texto.svg',
      route: '/marcas/volvo-construction-equipment',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Excavadoras', 'Cargadores Frontales', 'Compactadoras', 'Tiendetubos'],
      bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Bobcat',
      logoSrc: '/BobcatIMG/bobcat-logo-texto.png',
      route: '/marcas/bobcat',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Minicargadores', 'Excavadoras Compactas', 'Telehandlers'],
      bgImage: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Montabert',
      logoSrc: '/MontabertIMG/montabert-logo-texto.png',
      route: '/marcas/montabert',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Martillos Hidráulicos', 'Gamas SC/V32/V45/V55'],
      bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Michelin',
      logoSrc: '/MichelinIMG/michelin-logo-texto.png',
      route: '/marcas/michelin',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Neumáticos Minería Superficie', 'Subterráneos', 'Infraestructura', 'Industriales'],
      bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Sinotruk',
      logoSrc: '/SinotrukIMG/sinotruk-logo-texto.png',
      route: '/marcas/sinotruk',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Camiones de Volteo', 'Tractocamiones', 'Camiones Pesados'],
      bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'GHH Rand',
      logoSrc: '/GHHRandIMG/ghhrand-logo-texto.webp',
      route: '/marcas/ghh-rand',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Compresores de Tornillo', 'Compresores Industriales'],
      bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Toku',
      logoSrc: '/TokuIMG/tuku-logo-texto.png',
      route: '/marcas/toku',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Paving Breakers', 'Chipping Hammers', 'Demoledores'],
      bgImage: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  readonly brandsRow2: BrandShowcaseItem[] = [
    {
      name: 'Hiab',
      logoSrc: '/HiabIMG/hiab-logo-texto.svg',
      route: '/marcas/hiab',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Carretillas Elevadoras Transportables', 'Uso Urbano', 'Industrial', 'Off-Road'],
      bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Ingersoll Rand',
      logoSrc: '/IngersollRandIMG/ingersollrand-logo-texto.png',
      route: '/marcas/ingersoll-rand',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Aire Comprimido', 'Herramientas Neumáticas', 'Polipastos'],
      bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Donaldson',
      logoSrc: '/DonaldsonIMG/donaldson-logo-texto.svg',
      route: '/marcas/donaldson',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Filtros Ultra-Web', 'Colectores de Polvo', 'Filtros Cartucho'],
      bgImage: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Parker',
      logoSrc: '/ParkerIMG/parker-logo-texto.png',
      route: '/marcas/parker',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Sistemas de Aire Comprimido', 'Distribución Transair'],
      bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Firman',
      logoSrc: '/FirmanIMG/firman-logo-texto.svg',
      route: '/marcas/firman',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Generadores Eléctricos', 'Motobombas', 'Motores Estacionarios'],
      bgImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Bull',
      logoSrc: '/BullIMG/bull-logo-texto.png',
      route: '/marcas/bull',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Equipos de Construcción', 'Movimiento de Tierra'],
      bgImage: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop',
    },
  ];
}
