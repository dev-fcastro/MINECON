import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-parker',
  imports: [RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './parker.component.html',
  styleUrl: './parker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParkerComponent {
  readonly transairFeatures = [
    { title: 'Instalación Rápida', desc: 'Sistema de tuberías modular que se instala hasta 4 veces más rápido que el acero tradicional.' },
    { title: 'Sin Corrosión', desc: 'Material de aluminio anodizado que elimina el óxido y la contaminación por partículas metálicas.' },
    { title: 'Máxima Eficiencia', desc: 'Paredes interiores lisas que reducen las caídas de presión y el consumo energético.' },
    { title: 'Modular y Flexible', desc: 'Sistema desmontable y reutilizable que se adapta a cualquier cambio de layout de planta.' },
  ];
}
