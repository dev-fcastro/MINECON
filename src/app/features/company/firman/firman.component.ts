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
      desc: 'Serie T / H  desde 1,000W hasta 12,000W. Portátiles, confiables y con CO Alert para seguridad en exteriores.',
      iconPath: 'M7 2v11h3v9l7-12h-4l4-8z',
      watt: '1,000W  12,000W',
    },
    {
      title: 'Generadores a Diésel',
      desc: 'Alta eficiencia para uso industrial y comercial. Mayor autonomía de combustible y menor costo por kWh.',
      iconPath: 'M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5z',
      watt: '3,500W  15,000W',
    },
    {
      title: 'Firman Zero E (Eléctrico)',
      desc: 'Sin emisiones, sin ruido, sin mantenimiento. El generador portátil eléctrico para el futuro. Expandible con Power Pods.',
      iconPath: 'M16.5 9h-1V4.5h-1V9h-5V4.5h-1V9h-1C6.12 9 5 10.12 5 11.5v3.68c0 1.67 1.07 3.1 2.5 3.68V22h1v-3.14c.31.08.65.14 1 .14h1c.35 0 .69-.06 1-.14V22h1v-3.14c1.43-.58 2.5-2.01 2.5-3.68V11.5C18 10.12 16.88 9 16.5 9z',
      watt: 'Batería expandible',
    },
    {
      title: 'Motobombas',
      desc: 'Bombas centrífugas para agua limpia, agua sucia y aplicaciones de alta presión. Fácil arranque y alta durabilidad.',
      iconPath: 'M17 16.99c-1.35 0-2.2.42-2.95.83-.65.35-1.18.62-2.05.62-.87 0-1.4-.27-2.05-.62-.75-.41-1.6-.83-2.95-.83s-2.2.42-2.95.83c-.65.35-1.17.62-2.05.62v1.98c1.35 0 2.2-.42 2.95-.83.65-.35 1.18-.62 2.05-.62.87 0 1.4.27 2.05.62.75.41 1.6.83 2.95.83s2.2-.42 2.95-.83c.65-.35 1.18-.62 2.05-.62s1.4.27 2.05.62c.75.41 1.6.83 2.95.83v-1.98c-.87 0-1.4-.27-2.05-.62-.75-.41-1.6-.83-2.95-.83zm0-4.5c-1.35 0-2.2.42-2.95.83-.65.35-1.18.62-2.05.62-.87 0-1.4-.27-2.05-.62-.75-.41-1.6-.83-2.95-.83s-2.2.42-2.95.83c-.65.35-1.17.62-2.05.62v1.98c1.35 0 2.2-.42 2.95-.83.65-.35 1.18-.62 2.05-.62.87 0 1.4.27 2.05.62.75.41 1.6.83 2.95.83s2.2-.42 2.95-.83c.65-.35 1.18-.62 2.05-.62s1.4.27 2.05.62c.75.41 1.6.83 2.95.83v-1.98c-.87 0-1.4-.27-2.05-.62-.75-.41-1.6-.83-2.95-.83z',
      watt: '1"  4" de salida',
    },
  ];

  readonly promise = [
    { title: 'Engineered in the USA', desc: 'Diseño norteamericano con estándares de calidad supervisados en cada etapa de fabricación.' },
    { title: 'Industry-Leading Warranty', desc: 'Garantía de fabricante de 3 años residencial / 1 año comercial con cobertura total.' },
    { title: 'Outstanding Support', desc: 'Técnicos certificados disponibles 5 días a la semana para soporte y mantenimiento.' },
  ];
}
