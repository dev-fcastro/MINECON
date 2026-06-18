import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-ingersoll-rand',
  imports: [RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './ingersoll-rand.component.html',
  styleUrl: './ingersoll-rand.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngersollRandComponent {
  readonly productLines = [
    {
      title: 'Compresores de Aceite',
      desc: 'Compresores de tornillo rotativo oil-flooded para aplicaciones industriales de alta demanda con máxima eficiencia.',
      image: '/IngersollRandIMG/OilFloodedAirCompressor.png',
      models: ['Oil-Flooded UP6/UP5', 'R-Series', 'N-Series'],
    },
    {
      title: 'Compresores Oil-Free',
      desc: 'Aire 100% libre de aceite para industrias farmacéuticas, alimentarias y de procesos donde la pureza es crítica.',
      image: '/IngersollRandIMG/OilFreeAirCompressor.png',
      models: ['Sierra™ Oil-Free', 'Nirvana® Oil-Free', 'Centrifugal C-Series'],
    },
    {
      title: 'Herramientas Neumáticas',
      desc: 'Más de 100 años de ingeniería neumática. Llaves de impacto, taladros, pulidoras y herramientas de sujeción para uso industrial.',
      image: '/IngersollRandIMG/iqv12_group_noshadow.jpg',
      models: ['IQv12 Serie', 'W7150', 'Herramientas de Precisión'],
    },
    {
      title: 'Soluciones de Elevación',
      desc: 'Polipastos y sistemas de elevación de cable de alambre y cadena para manejo seguro de cargas industriales.',
      image: '/IngersollRandIMG/hoist_wirerope_p001_copy.png',
      models: ['LODESTAR® LP', 'COFFING® JLC', 'Yale ERGO'],
    },
  ];

  readonly industries = [
    { name: 'Manufactura', icon: '🏭' },
    { name: 'Minería', icon: '⛏' },
    { name: 'Automotriz', icon: '🚗' },
    { name: 'Aeroespacial', icon: '✈' },
    { name: 'Alimentaria', icon: '🌾' },
    { name: 'Petróleo y Gas', icon: '⛽' },
  ];
}
