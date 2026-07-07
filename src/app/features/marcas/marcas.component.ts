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
      url: '/VolvoConstructionEquipmentIMG/ART_A60H_Customer_GB_008_EMEA.jpg',
      alt: 'Maquinaria pesada  marcas líderes mundiales representadas por MINECON',
      label: 'RENDIMIENTO PODEROSO',
      caption: 'Representamos las marcas más reconocidas del mercado global en maquinaria industrial, construcción, minería, energía y transporte.',
    },
  ];

  // Split in two rows: 7 + 6 to keep panel widths comfortable
  readonly brandsRow1: BrandShowcaseItem[] = [
    {
      name: 'Volvo Construction Equipment',
      logoSrc: '/VolvoConstructionEquipmentIMG/volvo-imagen-completa-logo.png',
      route: '/marcas/volvo-construction-equipment',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Excavadoras', 'Cargadores Frontales', 'Compactadoras', 'Tiendetubos'],
      bgImage: '/VolvoConstructionEquipmentIMG/ART_A60H_Customer_GB_008_EMEA.jpg',
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
      bgImage: '/MontabertIMG/montabert.jpg',
    },
    {
      name: 'Michelin',
      logoSrc: '/MichelinIMG/michelin-logo-texto.png',
      route: '/marcas/michelin',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Neumáticos Minería Superficie', 'Subterráneos', 'Infraestructura', 'Industriales'],
      bgImage: '/MichelinIMG/Minas-de-superficie_lightbox_full.jpg',
    },
    {
      name: 'Sinotruk',
      logoSrc: '/SinotrukIMG/sinotruk-logo-texto.png',
      route: '/marcas/sinotruk',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Camiones de Volteo', 'Tractocamiones', 'Camiones Pesados'],
      bgImage: '/SinotrukIMG/sinotruk-img-header.png',
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
      bgImage: '/TokuIMG/cp_0112_bwr_cmyk_250p_fixtif_copy.jpg',
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
      bgImage: '/HiabIMG/moffett-e4-main_1600x845.jpg',
    },
    {
      name: 'Ingersoll Rand',
      logoSrc: '/IngersollRandIMG/ingersollrand-logo-texto.png',
      route: '/marcas/ingersoll-rand',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Aire Comprimido', 'Herramientas Neumáticas', 'Polipastos'],
      bgImage: '/IngersollRandIMG/CorpHeroBanners_DedicatedExperts.jpg',
    },
    {
      name: 'Donaldson',
      logoSrc: '/DonaldsonIMG/donaldson-logo-texto.svg',
      route: '/marcas/donaldson',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Filtros Ultra-Web', 'Colectores de Polvo', 'Filtros Cartucho'],
      bgImage: '/DonaldsonIMG/cabinet_collector_series60__51299139629018812801280.png',
    },
    {
      name: 'Parker',
      logoSrc: '/ParkerIMG/parker-logo-texto.png',
      route: '/marcas/parker',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Sistemas de Aire Comprimido', 'Distribución Transair'],
      bgImage: '/ParkerIMG/CAT-T0061-ES.jpg',
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
