import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-donaldson',
  imports: [RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './donaldson.component.html',
  styleUrl: './donaldson.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonaldsonComponent {
  readonly productLines = [
    {
      title: 'Filtros Ultra-Web®',
      desc: 'Tecnología de fibra submicrónica patentada para captura superior de partículas finas sin comprometer el caudal de aire.',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=900&auto=format&fit=crop',
      tag: 'Filtración Industrial',
    },
    {
      title: 'Colectores de Polvo',
      desc: 'Sistemas modulares Torit® para control de polvo en procesos de manufactura, soldadura, madera y metales.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop',
      tag: 'Colección de Polvo',
    },
    {
      title: 'Filtros de Cartucho',
      desc: 'PowerCore® y filtros de cartucho plisado para máxima eficiencia en entornos de alta carga de polvo.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
      tag: 'Cartucho / Plisado',
    },
    {
      title: 'Filtración de Líquidos',
      desc: 'Filtros para aceite hidráulico, combustible, refrigerante y agua de proceso en equipos pesados.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
      tag: 'Líquidos',
    },
  ];

  readonly stats = [
    { num: '1,300+', label: 'Científicos e ingenieros' },
    { num: '10', label: 'Centros de innovación' },
    { num: '150', label: 'Ubicaciones globales' },
    { num: '1915', label: 'Año de fundación' },
  ];
}
