import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

interface VolvoCEProduct {
  title: string;
  subtitle: string;
  image: string;
  route: string;
}

@Component({
  selector: 'app-volvo-construction-equipment',
  imports: [NgOptimizedImage, RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './volvo-construction-equipment.component.html',
  styleUrl: './volvo-construction-equipment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolvoConstructionEquipmentComponent {

  readonly products: VolvoCEProduct[] = [
    {
      title: 'Excavadoras',
      subtitle: 'Serie EC — potencia, precisión y bajo consumo',
      image: 'https://images.unsplash.com/photo-1579616790875-af7fbc5a5cf2?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
    },
    {
      title: 'Cargadores Frontales',
      subtitle: 'Serie L — rendimiento óptimo en carga y acarreo',
      image: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
    },
    {
      title: 'Compactadores',
      subtitle: 'Serie SD/DD — compactación de suelos y asfalto',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
    },
    {
      title: 'Articulados',
      subtitle: 'Serie A — acarreo en terrenos difíciles',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
    },
    {
      title: 'Tiendetubos',
      subtitle: 'Serie PL — precisión en tendido de tuberías',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
    },
    {
      title: 'Pavimentadoras',
      subtitle: 'Serie P — acabado de calidad en asfalto',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
    },
  ];

  readonly stats = [
    { num: '175+', label: 'Años de innovación' },
    { num: '190', label: 'Mercados globales' },
    { num: '13,000+', label: 'Técnicos certificados' },
    { num: '#1', label: 'En satisfacción de cliente' },
  ];
}
