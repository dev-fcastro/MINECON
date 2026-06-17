import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

interface BobcatProduct {
  title: string;
  desc: string;
  image: string;
  route: string;
}

@Component({
  selector: 'app-bobcat',
  imports: [RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './bobcat.component.html',
  styleUrl: './bobcat.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BobcatComponent {
  readonly products: BobcatProduct[] = [
    {
      title: 'Cargadores Compactos',
      desc: 'Rendimiento, confiabilidad y comodidad en la marca más confiable de cargadores compactos.',
      image: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
    },
    {
      title: 'Mini Excavadoras',
      desc: 'Excavadoras compactas con clase mundial de rendimiento y productividad.',
      image: 'https://images.unsplash.com/photo-1579616790875-af7fbc5a5cf2?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
    },
    {
      title: 'Telehandlers',
      desc: 'Alto rendimiento pero económico, ideal para trabajar en condiciones difíciles.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
    },
    {
      title: 'Vehículos Utilitarios',
      desc: 'Diseñados para personas que necesitan hacer el trabajo, con alto nivel de confort.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
    },
    {
      title: 'Toolcat / Work Machines',
      desc: 'Varias máquinas combinadas en una sola plataforma multiusos.',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
    },
    {
      title: 'Accesorios e Implementos',
      desc: 'Más de 100 accesorios para ampliar la versatilidad de cada equipo Bobcat.',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
    },
  ];
}
