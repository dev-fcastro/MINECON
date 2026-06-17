import { Component, ChangeDetectionStrategy } from '@angular/core';
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
  imports: [RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './michelin.component.html',
  styleUrl: './michelin.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MichelinComponent {
  readonly categories: MichelinCategory[] = [
    {
      title: 'Minas de Superficie',
      desc: 'Neumáticos XTXL y XKD para equipos de gran tonelaje en minería a cielo abierto. Máxima durabilidad y resistencia al corte.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=900&auto=format&fit=crop',
      tags: ['XTXL', 'XKD', 'XADN'],
    },
    {
      title: 'Minas Subterráneas',
      desc: 'Soluciones para equipos de carga y acarreo en túneles. Diseñados para resistir condiciones extremas de tracción y abrasión.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
      tags: ['XMINE', 'MICHELIN 345', 'Underground'],
    },
    {
      title: 'Infraestructura',
      desc: 'Neumáticos para equipos de construcción de carreteras, aeropuertos y obras civiles de gran escala.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=900&auto=format&fit=crop',
      tags: ['XHA', 'XGPT', 'XZM'],
    },
    {
      title: 'Industriales',
      desc: 'Gama completa para montacargas, manipuladores telescópicos y equipos de manejo de materiales.',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=900&auto=format&fit=crop',
      tags: ['STABIL X', 'XZM', 'AGILIS'],
    },
  ];
}
