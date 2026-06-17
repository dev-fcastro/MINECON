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
      title: 'Compresores de Aire',
      desc: 'Compresores de tornillo rotativo, centrífugos y libres de aceite para aplicaciones industriales de alta demanda.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop',
      models: ['Oil-Free R Series', 'Oil-Flooded UP6/UP5', 'Centrifugal C-Series'],
    },
    {
      title: 'Herramientas Neumáticas',
      desc: 'Más de 100 años de ingeniería neumática. Llaves de impacto, taladros, pulidoras y herramientas de sujeción para uso industrial.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop',
      models: ['IQv12 Serie', 'W7150', 'Herramientas de Precisión'],
    },
    {
      title: 'Soluciones de Elevación',
      desc: 'Polipastos y sistemas de elevación de cable de alambre y cadena para manejo seguro de cargas industriales.',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=900&auto=format&fit=crop',
      models: ['LODESTAR® LP', 'COFFING® JLC', 'Yale ERGO'],
    },
    {
      title: 'Sistemas de Vacío y Bombas',
      desc: 'Bombas de vacío y sistemas de fluidos de alto rendimiento para industria manufacturera y procesamiento.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop',
      models: ['NASH® Liquid Ring', 'Gardner Denver', 'Compresores Portátiles'],
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
