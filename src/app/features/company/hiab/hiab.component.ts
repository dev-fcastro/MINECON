import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-hiab',
  imports: [RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './hiab.component.html',
  styleUrl: './hiab.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HiabComponent {
  readonly useCases = [
    {
      title: 'Uso Urbano',
      desc: 'Entregas de última milla en ciudad. El Moffett E4 se monta/desmonta en segundos sin necesidad de grúa auxiliar.',
      image: '/HiabIMG/moffett-e4-6_urban-use_320x208.jpg',
    },
    {
      title: 'Industrial',
      desc: 'Para almacenes, plantas industriales y centros de distribución donde se requiere manejo de pallets con movilidad total.',
      image: '/HiabIMG/moffett-m4nx-industrial-use_320x208.jpg',
    },
    {
      title: 'Off-Road / Construcción',
      desc: 'El M5 25.3 con tracción 4WD para terrenos irregulares, obras de construcción y acceso en pendientes.',
      image: '/HiabIMG/moffett-m5-25-3-offroad-02-irl_1300px.jpg',
    },
    {
      title: 'Semi-Industrial',
      desc: 'Versatilidad entre entorno urbano y semi-rural. Alto rendimiento en distribución de materiales de construcción.',
      image: '/HiabIMG/moffett-m5-semi-industrial-use_320x208.jpg',
    },
  ];

  readonly models = [
    { name: 'Moffett E4', spec: 'Eléctrico / 2,000 kg', note: 'Cero emisiones, operación silenciosa' },
    { name: 'Moffett M4 NX', spec: 'Diésel / 2,000 kg', note: 'Alta productividad en entorno industrial' },
    { name: 'Moffett M5 25.3', spec: 'Diésel 4WD / 2,500 kg', note: 'Máxima tracción para terreno irregular' },
    { name: 'Moffett M8 70.3', spec: 'Diésel / 7,000 kg', note: 'Capacidad máxima para cargas pesadas' },
  ];
}
