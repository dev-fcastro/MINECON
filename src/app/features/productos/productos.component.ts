import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SliderComponent, SliderImage } from '../../shared/components/structure-components/slider-componet/slider.component';
import { TitleComponent } from '../../shared/components/ux/title-component/title.component';
import { FeatureSplitComponent, FeatureSplitItem } from '../../shared/components/structure-components/feature-split-component/feature-split.component';
import { BrandShowcaseComponent, BrandShowcaseItem } from '../../shared/components/structure-components/brandshowcase-component/brandshowcase.component';
import { CallToActionComponent } from '../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-productos',
  imports: [
    RouterLink,
    SliderComponent,
    TitleComponent,
    FeatureSplitComponent,
    BrandShowcaseComponent,
    CallToActionComponent,
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductosComponent {
  readonly heroSlides: SliderImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',
      alt: 'División Industrial — Sistemas de aire comprimido',
      label: 'División Industrial',
      caption: 'OFRECEMOS SOLUCIONES PARA MEDIR, CONTROLAR Y GESTIONAR EL AIRE COMPRIMIDO.',
    },
    {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop',
      alt: 'División Construcción y Minería — Equipos pesados en obra',
      label: 'Construcción & Minería',
      caption: 'PASIÓN POR EL RENDIMIENTO',
    },
    {
      url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1400&auto=format&fit=crop',
      alt: 'Vehículos de carga Sinotruk',
      label: 'Vehículos de Carga',
      caption: 'GRANDES MARCAS, GRAN RESPALDO',
    },
    {
      url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1400&auto=format&fit=crop',
      alt: 'División Energía — Generadores Firman',
      label: 'División Energía',
      caption: 'LOS GENERADORES FIRMAN PERFORMANCE SERIES SON EL CORAZÓN DE LA LÍNEA FIRMAN.',
    },
  ];

  readonly divisionItems: FeatureSplitItem[] = [
    {
      eyebrow: 'OFRECEMOS SOLUCIONES PARA MEDIR, CONTROLAR Y GESTIONAR EL AIRE COMPRIMIDO.',
      title: 'División Industrial',
      description:
        'Nuestra división se enfoca en la distribución e instalación de sistemas de aire comprimido, satisfaciendo las necesidades de tratamiento, filtración y control de sistemas de vacío. Contamos con una alta gama de productos que abarcan desde compresores de tornillo rotativo, colectores de polvo, hasta líneas completas de herramientas neumáticas.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Sistemas de aire comprimido industrial',
      route: '/marcas/ingersoll-rand',
      ctaLabel: 'Ver marcas industriales',
    },
    {
      eyebrow: 'PASIÓN POR EL RENDIMIENTO',
      title: 'División Construcción & Minería',
      description:
        'Somos una empresa líder en la venta y alquiler de equipos para la construcción y la minería, contamos con una reconocida línea de productos que destacan por su calidad y eficiencia. Esta división satisface los requerimientos para los rubros enfocados a la extracción de agregados, construcción, compactación ligera, manipulación de concreto, excavación y movimiento de tierra.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Equipos pesados de construcción y minería en obra',
      route: '/marcas/volvo-construction-equipment',
      ctaLabel: 'Ver marcas C&M',
    },
    {
      eyebrow: 'GRANDES MARCAS, GRAN RESPALDO',
      title: 'Vehículos de Carga',
      description:
        'Nuestra división se enfoca en la distribución y comercialización de vehículos livianos y pesados satisfaciendo las necesidades del consumidor. Contamos con una alta gama de vehículos Sinotruk que abarcan desde camiones livianos hasta pesados.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Camiones de carga Sinotruk',
      route: '/marcas/sinotruk',
      ctaLabel: 'Ver Sinotruk',
    },
    {
      eyebrow: 'LOS GENERADORES FIRMAN PERFORMANCE SERIES SON EL CORAZÓN DE LA LÍNEA FIRMAN.',
      title: 'División Energía',
      description:
        'Estamos comprometidos con llevar energía de calidad a nuestros consumidores bajo la marca FIRMAN. Nos enfocamos en la distribución de generadores eléctricos, motobombas y motores estacionarios para diversas aplicaciones.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Generadores eléctricos Firman',
      route: '/marcas/firman',
      ctaLabel: 'Ver Firman',
    },
  ];

  readonly industrialBrands: BrandShowcaseItem[] = [
    {
      name: 'Ingersoll Rand',
      logoSrc: '/IngersollRandIMG/ingersollrand-logo-texto.png',
      route: '/marcas/ingersoll-rand',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Compresores', 'Herramientas Neumáticas', 'Polipastos'],
      bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Donaldson',
      logoSrc: '/DonaldsonIMG/donaldson-logo-texto.svg',
      route: '/marcas/donaldson',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Filtros', 'Colectores de Polvo', 'Filtración Industrial'],
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
      name: 'GHH Rand',
      logoSrc: '/GHHRandIMG/ghhrand-logo-texto.webp',
      route: '/marcas/ghh-rand',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Compresores de Tornillo', 'Compresores Industriales'],
      bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
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
  ];

  readonly cmBrands: BrandShowcaseItem[] = [
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
      categories: ['Neumáticos Minería', 'OTR Subterráneos', 'Infraestructura'],
      bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
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
    {
      name: 'Toku',
      logoSrc: '/TokuIMG/tuku-logo-texto.png',
      route: '/marcas/toku',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Demoledores', 'Paving Breakers', 'Herramientas Neumáticas'],
      bgImage: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Hiab',
      logoSrc: '/HiabIMG/hiab-logo-texto.svg',
      route: '/marcas/hiab',
      logoWidth: 200,
      logoHeight: 48,
      categories: ['Carretillas Elevadoras', 'Montacargas Transportables'],
      bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    },
  ];
}
