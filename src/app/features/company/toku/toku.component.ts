import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-toku',
  imports: [RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './toku.component.html',
  styleUrl: './toku.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokuComponent {
  readonly productCategories = [
    {
      title: 'Hydraulic Breakers',
      desc: 'Gamas ligera y media-pesada. Rompedoras hidráulicas para demolición de concreto, roca y pavimento en excavadoras de 1 a 35+ toneladas.',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=900&auto=format&fit=crop',
      models: ['Small Range', 'Middle & Large Range', 'TNB-30K'],
    },
    {
      title: 'Construction Tools',
      desc: 'Paving breakers neumáticos, demoledores de concreto, pick hammers, clay diggers y trenchers para trabajo pesado en obra.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
      models: ['Paving Breaker', 'Chipping Hammer', 'Concrete Breaker'],
    },
    {
      title: 'Air Tools',
      desc: 'Llaves de impacto, ratchet wrenches, taladros, pulidoras, sopladores y accesorios neumáticos para taller industrial.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop',
      models: ['Impact Wrench 3/8"', 'Impact Wrench 3/4"', 'Air Drill', 'Ratchet Wrench'],
    },
    {
      title: 'Air Hoist',
      desc: 'Polipastos neumáticos de cadena y cable para elevación industrial segura. Modelos de 0.5 a 5 toneladas.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
      models: ['Air Trolley Hoist', 'Air Manipulator', '0.5T — 5T'],
    },
  ];
}
