import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-firman',
  imports: [RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './firman.component.html',
  styleUrl: './firman.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirmanComponent {
  readonly productLines = [
    {
      title: 'Generadores a Gasolina',
      desc: 'Serie T / H — desde 1,000W hasta 12,000W. Portátiles, confiables y con CO Alert para seguridad en exteriores.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900&auto=format&fit=crop',
      watt: '1,000W — 12,000W',
    },
    {
      title: 'Generadores a Diésel',
      desc: 'Alta eficiencia para uso industrial y comercial. Mayor autonomía de combustible y menor costo por kWh.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
      watt: '3,500W — 15,000W',
    },
    {
      title: 'Firman Zero E (Eléctrico)',
      desc: 'Sin emisiones, sin ruido, sin mantenimiento. El generador portátil eléctrico para el futuro. Expandible con Power Pods.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900&auto=format&fit=crop',
      watt: 'Batería expandible',
    },
    {
      title: 'Motobombas',
      desc: 'Bombas centrífugas para agua limpia, agua sucia y aplicaciones de alta presión. Fácil arranque y alta durabilidad.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
      watt: '1" — 4" de salida',
    },
  ];

  readonly promise = [
    { title: 'Engineered in the USA', desc: 'Diseño norteamericano con estándares de calidad supervisados en cada etapa de fabricación.' },
    { title: 'Industry-Leading Warranty', desc: 'Garantía de fabricante de 3 años residencial / 1 año comercial con cobertura total.' },
    { title: 'Outstanding Support', desc: 'Técnicos certificados disponibles 5 días a la semana para soporte y mantenimiento.' },
  ];
}
