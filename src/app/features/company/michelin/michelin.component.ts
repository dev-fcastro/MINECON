import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

interface MichelinCategory {
  title: string;
  desc: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-michelin',
  imports: [NgOptimizedImage, RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './michelin.component.html',
  styleUrl: './michelin.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MichelinComponent {
  readonly categories: MichelinCategory[] = [
    {
      title: 'Minas de Superficie',
      desc: 'Neumáticos XTXL y XKD para equipos de gran tonelaje en minería a cielo abierto. Máxima durabilidad y resistencia al corte.',
      image: '/MichelinIMG/Minas-de-superficie_lightbox_full.jpg',
      tags: ['XTXL', 'XKD', 'XADN'],
    },
    {
      title: 'Minas Subterráneas',
      desc: 'Soluciones para equipos de carga y acarreo en túneles. Diseñados para resistir condiciones extremas de tracción y abrasión.',
      image: '/MichelinIMG/Minas-subterraneas_lightbox_full.jpg',
      tags: ['XMINE', 'MICHELIN 345', 'Underground'],
    },
    {
      title: 'Infraestructura',
      desc: 'Neumáticos para equipos de construcción de carreteras, aeropuertos y obras civiles de gran escala.',
      image: '/MichelinIMG/Infraestructura_lightbox_full.jpg',
      tags: ['XHA', 'XGPT', 'XZM'],
    },
    {
      title: 'Industriales',
      desc: 'Gama completa para montacargas, manipuladores telescópicos y equipos de manejo de materiales.',
      image: '/MichelinIMG/Industriales_lightbox_full.jpg',
      tags: ['STABIL X', 'XZM', 'AGILIS'],
    },
  ];
}
