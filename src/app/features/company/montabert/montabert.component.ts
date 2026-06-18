import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

interface MontabertProduct {
  range: string;
  models: string;
  weight: string;
  impact: string;
  application: string;
  image: string;
}

@Component({
  selector: 'app-montabert',
  imports: [RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './montabert.component.html',
  styleUrl: './montabert.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MontabertComponent {
  readonly products: MontabertProduct[] = [
    {
      range: 'Gama SC',
      models: 'SC 28 — SC 55',
      weight: '28 — 55 kg',
      impact: 'Gama ligera',
      application: 'Trabajos de demolición ligera y excavación en espacios reducidos.',
      image: '/MontabertIMG/900x0_s3-29012-Montabert-V32-Hydraulic-Breaker.jpg',
    },
    {
      range: 'Gama V32',
      models: 'V 32',
      weight: '320 kg',
      impact: '1,350 J',
      application: 'Demolición media, construcción de carreteras y canteras de pequeño porte.',
      image: '/MontabertIMG/v45.jpg',
    },
    {
      range: 'Gama V45–V55',
      models: 'V 45 / V 55',
      weight: '450 — 550 kg',
      impact: '2,500 — 4,000 J',
      application: 'Demolición de hormigón armado y trabajos de minería ligera a media.',
      image: '/MontabertIMG/v55768x993.jpg',
    },
    {
      range: 'Gama V65+',
      models: 'V 65 — V 150',
      weight: '650 — 1,500+ kg',
      impact: '8,000+ J',
      application: 'Minería y demolición pesada de alta exigencia. Máxima energía de impacto.',
      image: '/MontabertIMG/v65-1---website.jpg',
    },
  ];
}
