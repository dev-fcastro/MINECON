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
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
    },
    {
      title: 'Industrial',
      desc: 'Para almacenes, plantas industriales y centros de distribución donde se requiere manejo de pallets con movilidad total.',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=900&auto=format&fit=crop',
    },
    {
      title: 'Off-Road / Construcción',
      desc: 'El M5 25.3 con tracción 4WD para terrenos irregulares, obras de construcción y acceso en pendientes.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
    },
    {
      title: 'Semi-Industrial',
      desc: 'Versatilidad entre entorno urbano y semi-rural. Alto rendimiento en distribución de materiales de construcción.',
      image: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=900&auto=format&fit=crop',
    },
  ];

  readonly models = [
    { name: 'Moffett E4', spec: 'Eléctrico / 2,000 kg', note: 'Cero emisiones, operación silenciosa' },
    { name: 'Moffett M4 NX', spec: 'Diésel / 2,000 kg', note: 'Alta productividad en entorno industrial' },
    { name: 'Moffett M5 25.3', spec: 'Diésel 4WD / 2,500 kg', note: 'Máxima tracción para terreno irregular' },
    { name: 'Moffett M8 70.3', spec: 'Diésel / 7,000 kg', note: 'Capacidad máxima para cargas pesadas' },
  ];
}
