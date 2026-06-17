import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-ghh-rand',
  imports: [RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './ghh-rand.component.html',
  styleUrl: './ghh-rand.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GhhRandComponent {
  readonly solutions = [
    {
      title: 'Dry Bulk Solutions',
      desc: 'Compresores neumáticos Plug & Play para cisternas de transporte de materiales secos a granel. Diseño alemán con descarga limpia, segura y confiable día a día.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=900&auto=format&fit=crop',
      models: ['SILU® InChassis', 'SILU® InterCooled', 'Belt Driven'],
    },
    {
      title: 'Liquid Bulk Solutions',
      desc: 'Bombas de vacío y compresores de paletas para cisternas de líquidos a granel. Los modelos SV150 y SV205 ofrecen próxima generación de rendimiento.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop',
      models: ['SV150', 'SV205', 'Sliding Vane'],
    },
    {
      title: 'Aftermarket Support',
      desc: 'Red extensa de distribuidores de servicio con piezas de repuesto genuinas GHH RAND®, lubricantes y soporte técnico para mantener sus operaciones.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop',
      models: ['Spare Parts', 'Lubricants', 'SILU® Accessories'],
    },
  ];
}
