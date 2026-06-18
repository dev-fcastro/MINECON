import { Component, ChangeDetectionStrategy } from '@angular/core';
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
  imports: [RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './volvo-construction-equipment.component.html',
  styleUrl: './volvo-construction-equipment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolvoConstructionEquipmentComponent {

  readonly products: VolvoCEProduct[] = [
    {
      title: 'Excavadoras',
      subtitle: 'Serie EC — potencia, precisión y bajo consumo',
      image: '/VolvoConstructionEquipmentIMG/EXC_EC200E_T4f_2_W_RF.jpg',
      route: '/contacto',
    },
    {
      title: 'Cargadores Frontales',
      subtitle: 'Serie L — rendimiento óptimo en carga y acarreo',
      image: '/VolvoConstructionEquipmentIMG/WLO_L90H_T4f_1_W_29424.jpg',
      route: '/contacto',
    },
    {
      title: 'Compactadores',
      subtitle: 'Serie SD/DD — compactación de suelos y asfalto',
      image: '/VolvoConstructionEquipmentIMG/COS_SD160B_T4f_W_LF.jpg',
      route: '/contacto',
    },
    {
      title: 'Articulados',
      subtitle: 'Serie A — acarreo en terrenos difíciles',
      image: '/VolvoConstructionEquipmentIMG/ART_A40G_StageV_2_W_2018_10_LF.jpg',
      route: '/contacto',
    },
    {
      title: 'Tiendetubos',
      subtitle: 'Serie PL — precisión en tendido de tuberías',
      image: '/VolvoConstructionEquipmentIMG/PIP_PL3005E_1_W_LF.jpg',
      route: '/contacto',
    },
    {
      title: 'Minicargadores',
      subtitle: 'Serie MC — versatilidad máxima en espacios reducidos',
      image: '/VolvoConstructionEquipmentIMG/SSL_MC105C_T4f_1_W_LF.jpg',
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
