import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SliderComponent, SliderImage } from '../../shared/components/structure-components/slider-componet/slider.component';
import { TitleComponent } from '../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../shared/components/ux/paragraph-component/paragraph.component';
import { FeatureSplitComponent, FeatureSplitItem } from '../../shared/components/structure-components/feature-split-component/feature-split.component';
import { CallToActionComponent } from '../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-nosotros',
  imports: [
    RouterLink,
    SliderComponent,
    TitleComponent,
    ParagraphComponent,
    FeatureSplitComponent,
    CallToActionComponent,
  ],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosComponent {
  readonly heroSlides: SliderImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop',
      alt: 'MINECON — empresa de soluciones industriales en República Dominicana',
      label: 'Acerca de Nosotros',
      caption: 'DESDE 1975 SIRVIENDO A LA INDUSTRIA DE LA CONSTRUCCIÓN Y MINERÍA.',
    },
  ];

  readonly misionVisionItems: FeatureSplitItem[] = [
    {
      eyebrow: 'MISIÓN',
      title: 'Nuestra Misión',
      description:
        'Somos una empresa de soluciones que garantiza la excelencia a todos nuestros clientes en los sectores de construcción y minería, ventas de equipos industriales y automotriz, como también equipos de carga ligera y energía. Generamos valores determinados enfocados siempre al respeto de la comunidad y al medio ambiente.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Equipos MINECON en operación — misión empresarial',
    },
    {
      eyebrow: 'VISIÓN',
      title: 'Nuestra Visión',
      description:
        'Ser el líder del mercado de soluciones en las áreas de Construcción, Minería, Industrial y Automotriz. Siendo un ejemplo en la comunidad por los valores que proyectamos.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Horizonte industrial — visión MINECON',
    },
  ];

  readonly valores = [
    {
      title: 'Honestidad',
      description:
        'Realizamos todas nuestras operaciones bajo estrictas normas de calidad. Nuestro equipo está preparado para mostrar un comportamiento íntegro, responsable y transparente en toda acción que se lleve a cabo dentro y fuera de la empresa.',
      icon: '◈',
    },
    {
      title: 'Excelencia',
      description:
        'Contamos con un alto grado de especialización, donde el personal se caracteriza por el manejo óptimo de todos los recursos que ofrecemos, siempre manteniendo una conducta permanentemente productiva en cualquier área o departamento de la empresa.',
      icon: '◈',
    },
    {
      title: 'Gestión Humana',
      description:
        'Contamos con un equipo de profesionales especializados en mejorar la calidad de vida laboral de los integrantes de la organización. Al ser estos nuestros principales activos, les ofrecemos muy buenas condiciones de trabajo.',
      icon: '◈',
    },
    {
      title: 'Compromiso',
      description:
        'Estamos 100% comprometidos con nuestra sociedad. Ayudamos en el desarrollo de diversos proyectos que benefician a distintos sectores del país, siempre poniendo a disposición nuestros productos y servicios para la elaboración de los mismos.',
      icon: '◈',
    },
  ];
}
