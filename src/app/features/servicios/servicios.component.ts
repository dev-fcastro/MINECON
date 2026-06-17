import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SliderComponent, SliderImage } from '../../shared/components/structure-components/slider-componet/slider.component';
import { TitleComponent } from '../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../shared/components/ux/paragraph-component/paragraph.component';
import { FeatureSplitComponent, FeatureSplitItem } from '../../shared/components/structure-components/feature-split-component/feature-split.component';
import { CallToActionComponent } from '../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-servicios',
  imports: [
    RouterLink,
    SliderComponent,
    TitleComponent,
    ParagraphComponent,
    FeatureSplitComponent,
    CallToActionComponent,
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponent {
  readonly heroSlides: SliderImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1400&auto=format&fit=crop',
      alt: 'Servicio técnico certificado — MINECON',
      label: 'Servicios',
      caption: 'Respaldo técnico, repuestos originales y contratos de mantenimiento para mantener su operación en marcha.',
    },
  ];

  readonly packageCareItems: FeatureSplitItem[] = [
    {
      eyebrow: 'PROTECCIÓN TOTAL, ELIMINA EL RIESGO',
      title: 'PackageCARE — We Protect You',
      description:
        'Nuestros planes de protección representan el mayor valor para la gestión de activos al transferir el riesgo operativo a Ingersoll Rand. Somos responsables por el mantenimiento programado, así como por el uso de herramientas de análisis y análisis predictivo que ayudan a prevenir las interrupciones inesperadas en su producción.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Servicio PackageCARE — Ingersoll Rand protección total',
      route: '/contacto',
      ctaLabel: 'Consultar planes',
    },
  ];

  readonly irServices = [
    {
      title: 'Planes de Mantenimiento',
      description:
        'Asegure la confiabilidad de la prestación de su equipo de aire comprimido con nuestros programas de mantenimiento CARE. Con CARE, tenemos una meta: ganarnos el derecho de ser su socio de confianza.',
      ctaLabel: 'Encuentre el plan justo para usted',
      icon: '⚙',
    },
    {
      title: 'Refabricación',
      description:
        'El reemplazo del equipo de aire comprimido puede tener un impacto sobre los resultados finales. Nuestros productos refabricados pueden reducir ese impacto con una alternativa rentable y sustentable, al equipo nuevo.',
      ctaLabel: 'Ver las opciones disponibles',
      icon: '🔧',
    },
    {
      title: 'Servicios de Alquiler',
      description:
        'Vuelva a operar en forma más rápida, evite paradas costosas y disfrute de la máxima flexibilidad para sus necesidades de aire comprimido. Obtenga el aire que quiera con el servicio de alquiler Ingersoll Rand.',
      ctaLabel: 'Ver todos los alquileres',
      icon: '📦',
    },
    {
      title: 'Instalación',
      description:
        'Nuestros gerentes de proyecto son profesionales que entregan procesos simples y claros para garantizarle que esté en control de los objetivos del proyecto sin el problema de administrar cada pequeño detalle.',
      ctaLabel: 'Ver qué se incluye',
      icon: '🏗',
    },
    {
      title: 'Servicios de Desempeño',
      description:
        'Ingersoll Rand ofrece una variedad de servicios de desempeño. Desde la identificación de fugas hasta evaluaciones completas del sistema, garantizamos que su instalación sea eficiente y confiable.',
      ctaLabel: 'Ver los servicios de desempeño',
      icon: '📊',
    },
    {
      title: 'Capacitación del Producto',
      description:
        'Ingersoll Rand ofrece capacitación al cliente sobre compresores rotativos y centrífugos, así como también sobre microcontroladores.',
      ctaLabel: 'Ver las clases disponibles',
      icon: '🎓',
    },
  ];
}
