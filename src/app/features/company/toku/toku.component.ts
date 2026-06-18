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
      image: '/TokuIMG/cp_4130_5666_red_bw.jpg',
      models: ['Small Range', 'Middle & Large Range', 'TNB-30K'],
    },
    {
      title: 'Construction Tools',
      desc: 'Paving breakers neumáticos, demoledores de concreto, pick hammers, clay diggers y trenchers para trabajo pesado en obra.',
      image: '/TokuIMG/cp_0112_bwr_cmyk_250p_fixtif_copy.jpg',
      models: ['Paving Breaker TPB', 'Chipping Hammer AA', 'Concrete Breaker CP'],
    },
    {
      title: 'Chipping Hammers',
      desc: 'Martillos neumáticos ligeros AA0B y AA3B para cincelado, desbarbado y preparación de superficies de concreto.',
      image: '/TokuIMG/AA0B.png',
      models: ['AA0B', 'AA3B', 'AA0B Heavy Duty'],
    },
    {
      title: 'Air Hoist',
      desc: 'Polipastos neumáticos de cadena y cable para elevación industrial segura. Modelos de 0.5 a 5 toneladas.',
      image: '/TokuIMG/TOKU-ConstToolEN-150.jpg',
      models: ['Air Trolley Hoist', 'Air Manipulator', '0.5T — 5T'],
    },
  ];
}
