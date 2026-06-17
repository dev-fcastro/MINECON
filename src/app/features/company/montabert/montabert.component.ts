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
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
    },
    {
      range: 'Gama V32',
      models: 'V 32',
      weight: '320 kg',
      impact: '1,350 J',
      application: 'Demolición media, construcción de carreteras y canteras de pequeño porte.',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=900&auto=format&fit=crop',
    },
    {
      range: 'Gama V45',
      models: 'V 45',
      weight: '450 kg',
      impact: '2,500 J',
      application: 'Demolición de estructuras de hormigón armado y trabajos de minería ligera.',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=900&auto=format&fit=crop',
    },
    {
      range: 'Gama V55',
      models: 'V 55',
      weight: '550 kg',
      impact: '4,000 J',
      application: 'Aplicaciones de minería y demolición pesada de alta exigencia.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=900&auto=format&fit=crop',
    },
  ];
}
