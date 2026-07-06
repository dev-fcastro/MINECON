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
      url: '/VolvoConstructionEquipmentIMG/CUS_Classic_Parts_1_21912_01.jpg',
      alt: 'Repuestos originales Volvo  MINECON',
      label: 'Repuestos',
      caption: 'REPUESTOS DE CALIDAD',
    },
  ];

  readonly repuestosCards = [
    {
      title: 'Repuestos de Mantenimiento',
      description:
        'Siga el programa de mantenimiento de su máquina con repuestos para mantenimiento que garantizan la productividad y el tiempo de máquina disponible.',
      image: '/VolvoConstructionEquipmentIMG/CUS_SER_Foundation_H_21546_02.jpg',
      alt: 'Repuestos de mantenimiento Volvo',
    },
    {
      title: 'Repuestos',
      description:
        'Los Repuestos Volvo son una solución rentable para dar una nueva vida a una máquina que trabaja duro.',
      image: '/VolvoConstructionEquipmentIMG/CUS_Classic_Parts_1_21912_01.jpg',
      alt: 'Repuestos originales Volvo',
    },
    {
      title: 'Repuestos de Desgaste',
      description:
        'Volvo ofrece una amplia gama de repuestos de desgaste que han sido desarrollados y probados para un gran número de aplicaciones.',
      image: '/VolvoConstructionEquipmentIMG/CUS_CAR_1_DeveloperPortal_02_H.jpg',
      alt: 'Repuestos de desgaste Volvo',
    },
  ];
}
