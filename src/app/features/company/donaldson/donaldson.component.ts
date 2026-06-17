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
      title: 'Filtros PowerCore®',
      desc: 'Tecnología de filtro plisado compacto Ultra-Web® para captura superior de partículas finas sin comprometer el caudal.',
      image: '/DonaldsonIMG/powercore_cased_c2-wbar.png',
      tag: 'Filtración Industrial',
    },
    {
      title: 'Colectores de Polvo',
      desc: 'Sistemas modulares Torit® Cabinet Collector para control de polvo en manufactura, soldadura, madera y metales.',
      image: '/DonaldsonIMG/cabinet_collector_series60__51299139629018812801280.png',
      tag: 'Colección de Polvo',
    },
    {
      title: 'Filtros de Cartucho DFT',
      desc: 'Filtros de cartucho plisado DFT para máxima eficiencia y larga vida útil en entornos de alta carga de polvo.',
      image: '/DonaldsonIMG/dft.png',
      tag: 'Cartucho / Plisado',
    },
    {
      title: 'Filtración Hidráulica',
      desc: 'Filtros para aceite hidráulico, combustible, refrigerante y agua de proceso en equipos pesados y móviles.',
      image: '/DonaldsonIMG/1151-hydrauliek-3.jpg',
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
