import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SliderComponent, SliderImage } from '../../shared/components/structure-components/slider-componet/slider.component';
import { TitleComponent } from '../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-repuestos',
  imports: [
    RouterLink,
    SliderComponent,
    TitleComponent,
    ParagraphComponent,
    CallToActionComponent,
  ],
  templateUrl: './repuestos.component.html',
  styleUrl: './repuestos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepuestosComponent {
  readonly heroSlides: SliderImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop',
      alt: 'Repuestos originales Volvo — MINECON',
      label: 'Repuestos',
      caption: 'REPUESTOS DE CALIDAD',
    },
  ];

  readonly repuestosCards = [
    {
      title: 'Repuestos de Mantenimiento',
      description:
        'Siga el programa de mantenimiento de su máquina con repuestos para mantenimiento que garantizan la productividad y el tiempo de máquina disponible.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop',
      alt: 'Repuestos de mantenimiento Volvo',
    },
    {
      title: 'Repuestos',
      description:
        'Los Repuestos Volvo son una solución rentable para dar una nueva vida a una máquina que trabaja duro.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=900&auto=format&fit=crop',
      alt: 'Repuestos originales Volvo',
    },
    {
      title: 'Repuestos de Desgaste',
      description:
        'Volvo ofrece una amplia gama de repuestos de desgaste que han sido desarrollados y probados para un gran número de aplicaciones.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
      alt: 'Repuestos de desgaste Volvo',
    },
  ];
}
