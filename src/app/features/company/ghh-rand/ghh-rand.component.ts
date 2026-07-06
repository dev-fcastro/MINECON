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
      iconPath: 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z',
      models: ['SILU® InChassis', 'SILU® InterCooled', 'Belt Driven'],
    },
    {
      title: 'Liquid Bulk Solutions',
      desc: 'Bombas de vacío y compresores de paletas para cisternas de líquidos a granel. Los modelos SV150 y SV205 ofrecen próxima generación de rendimiento.',
      iconPath: 'M12 21.5c-4.28 0-7.5-3.22-7.5-7.5 0-4.5 6-11 7.5-12.5 1.5 1.5 7.5 8 7.5 12.5 0 4.28-3.22 7.5-7.5 7.5z',
      models: ['SV150', 'SV205', 'Sliding Vane'],
    },
    {
      title: 'Aftermarket Support',
      desc: 'Red extensa de distribuidores de servicio con piezas de repuesto genuinas GHH RAND®, lubricantes y soporte técnico para mantener sus operaciones.',
      iconPath: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
      models: ['Spare Parts', 'Lubricants', 'SILU® Accessories'],
    },
  ];
}
