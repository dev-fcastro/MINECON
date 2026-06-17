import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-bull',
  imports: [RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './bull.component.html',
  styleUrl: './bull.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BullComponent {
  readonly equipment = [
    {
      title: 'Backhoe Loaders',
      desc: 'Tractoras con retroexcavadora — versatilidad máxima para excavación, carga y movimiento de tierra en un solo equipo.',
      image: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=900&auto=format&fit=crop',
      models: ['BULL BS 76E', 'BULL BS 80E', 'BULL BS Grand Series', 'BULL High Speed Series'],
    },
    {
      title: 'Skid Steer Loaders',
      desc: 'Minicargadores de giro cero para trabajo en espacios confinados, demolición y movimiento de materiales.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
      models: ['BULL BSD Series', 'BULL Smart 80'],
    },
    {
      title: 'Bucket Options',
      desc: 'Más de 8 tipos de baldes intercambiables para cada aplicación: obra, minería, demolición y manejo de residuos.',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=900&auto=format&fit=crop',
      models: ['GP Bucket', 'Rock Bucket', '4-in-1 Clam', 'Trenching', 'Grabbing Fork'],
    },
  ];

  readonly industries = [
    'Construcción', 'Agricultura', 'Reciclaje y Demolición',
    'Paisajismo', 'Minería de Agregados', 'Infraestructura',
  ];

  readonly stats = [
    { num: '56,000+', label: 'Clientes globales' },
    { num: '150+', label: 'Distribuidores' },
    { num: '40+', label: 'Años de manufactura' },
    { num: '2,200', label: 'Empleados' },
  ];
}
