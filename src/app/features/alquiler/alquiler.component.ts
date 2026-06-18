import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SliderComponent, SliderImage } from '../../shared/components/structure-components/slider-componet/slider.component';
import { TitleComponent } from '../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../shared/components/ux/paragraph-component/paragraph.component';
import { FeatureSplitComponent, FeatureSplitItem } from '../../shared/components/structure-components/feature-split-component/feature-split.component';
import { CallToActionComponent } from '../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-alquiler',
  imports: [
    RouterLink,
    SliderComponent,
    TitleComponent,
    ParagraphComponent,
    FeatureSplitComponent,
    CallToActionComponent,
  ],
  templateUrl: './alquiler.component.html',
  styleUrl: './alquiler.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlquilerComponent {
  readonly heroSlides: SliderImage[] = [
    {
      url: '/VolvoConstructionEquipmentIMG/ART_A60H_Customer_GB_008_EMEA.jpg',
      alt: 'Equipos de construcción y minería disponibles para alquiler — MINECON',
      label: 'Alquiler de Equipos',
      caption: 'ENCUENTRE SU EQUIPO IDEAL',
    },
    {
      url: '/IngersollRandIMG/CorpHeroBanners_DedicatedExperts.jpg',
      alt: 'Equipos industriales de aire comprimido disponibles para alquiler',
      label: 'Alquiler Industrial',
      caption: 'SOLUCIONES FLEXIBLES PARA CADA NECESIDAD',
    },
  ];

  readonly alquilerItems: FeatureSplitItem[] = [
    {
      eyebrow: 'CONSTRUCCIÓN & MINERÍA',
      title: 'Alquiler Equipos C&M',
      description:
        'Nuestros equipos de construcción y minería para alquiler permiten mantener la actividad y llevar a cabo operaciones diarias de forma ininterrumpida. Desde emergencias hasta tareas temporales durante una situación de demanda, le proporcionamos equipos de alquiler en cualquier momento con total fiabilidad.',
      image: '/VolvoConstructionEquipmentIMG/WLO_L220H_T4f_1_22329.jpg',
      imageAlt: 'Equipos de construcción y minería en obra disponibles para alquiler',
      route: '/contacto',
      ctaLabel: 'Solicitar equipo',
    },
    {
      eyebrow: 'INDUSTRIAL',
      title: 'Alquiler Equipos Industrial',
      description:
        'Nuestros equipos industriales de alquiler permiten mantener la actividad y llevar a cabo operaciones cruciales sin interrupciones. Desde emergencias hasta aplicaciones temporales durante un pico de demanda, le proporcionamos equipos de alquiler en cualquier momento con total fiabilidad.',
      image: '/IngersollRandIMG/OilFloodedAirCompressor.png',
      imageAlt: 'Equipos industriales de aire comprimido disponibles para alquiler',
      route: '/contacto',
      ctaLabel: 'Solicitar equipo',
    },
  ];
}
