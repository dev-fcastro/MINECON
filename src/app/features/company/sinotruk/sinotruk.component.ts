import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CategoryCardComponent } from '../../../shared/components/ux/category-card-component/category-card.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

interface TruckCategory {
  title: string;
  bgImage: string;
  route: string;
}

interface TechItem {
  icon: string;
  title: string;
  caption: string;
}

@Component({
  selector: 'app-sinotruk',
  imports: [NgOptimizedImage, RouterLink, TitleComponent, ParagraphComponent, CategoryCardComponent, CallToActionComponent],
  templateUrl: './sinotruk.component.html',
  styleUrl: './sinotruk.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinotrukComponent {
  readonly categories: TruckCategory[] = [
    { title: 'Camión Pesado',        bgImage: '/SinotrukIMG/sinotruk-img-header.png', route: '/contacto' },
    { title: 'Camión Ligero',        bgImage: '/SinotrukIMG/sinotruk-img-header.png', route: '/contacto' },
    { title: 'Vehículo Especial',    bgImage: '/SinotrukIMG/sinotruk-img-header.png', route: '/contacto' },
    { title: 'Camioneta Ligera',     bgImage: '/SinotrukIMG/sinotruk-img-header.png', route: '/contacto' },
    { title: 'Semi-Remolque',        bgImage: '/SinotrukIMG/sinotruk-img-header.png', route: '/contacto' },
    { title: 'Nueva Energía',        bgImage: '/SinotrukIMG/sinotruk-img-header.png', route: '/contacto' },
  ];

  readonly tech: TechItem[] = [
    {
      icon: 'M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.3.07-.62.07-.96 0-.34-.03-.66-.07-1l2.16-1.68c.2-.16.25-.44.12-.66l-2.04-3.54c-.13-.22-.41-.3-.63-.22l-2.54 1.03c-.54-.42-1.12-.76-1.74-1.04l-.38-2.68C14.16 3.26 14 3.1 13.76 3H10.24c-.24 0-.4.16-.44.4l-.38 2.68c-.62.28-1.2.62-1.74 1.04L5.14 6.09c-.22-.08-.5 0-.63.22L2.47 9.85c-.13.22-.08.5.12.66l2.16 1.68c-.04.34-.07.67-.07 1 0 .33.03.66.07.96l-2.16 1.68c-.2.16-.25.44-.12.66l2.04 3.54c.13.22.41.3.63.22l2.54-1.03c.54.42 1.12.76 1.74 1.04l.38 2.68c.04.24.2.4.44.4h3.52c.24 0 .4-.16.44-.4l.38-2.68c.62-.28 1.2-.62 1.74-1.04l2.54 1.03c.22.08.5 0 .63-.22l2.04-3.54c.13-.22.08-.5-.12-.66l-2.16-1.68z',
      title: 'Sistema de Potencia',
      caption: 'Motores propios de alta eficiencia, desde 210 CV hasta 540 CV, fabricados en Jinan.',
    },
    {
      icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 17.93V18a1 1 0 0 0-2 0v1.93A8 8 0 0 1 4.07 13H6a1 1 0 0 0 0-2H4.07A8 8 0 0 1 11 4.07V6a1 1 0 0 0 2 0V4.07A8 8 0 0 1 19.93 11H18a1 1 0 0 0 0 2h1.93A8 8 0 0 1 13 19.93z',
      title: 'Conducción Inteligente',
      caption: 'Sistemas avanzados de asistencia al conductor con tecnología de colaboración MAN.',
    },
    {
      icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4.86l5 2.25V11c0 3.49-2.35 6.79-5 7.93C9.35 17.79 7 14.49 7 11V7.11l5-2.25z',
      title: 'Seguridad Activa',
      caption: 'Cabinas de alta resistencia y sistemas de seguridad certificados internacionalmente.',
    },
    {
      icon: 'M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z',
      title: 'Alto Rendimiento',
      caption: 'Cadena cinemática optimizada para máxima eficiencia en largas distancias y faena.',
    },
    {
      icon: 'M17 8C8 10 5.9 16.17 3.82 20.31A4 4 0 0 0 8 22c4 0 6-3 8-6s5-5 8-5c-2-4-5-3-7-3z',
      title: 'Control de Emisiones',
      caption: 'Tecnología Euro V y VI para cumplimiento de estándares medioambientales globales.',
    },
    {
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
      title: 'Red Global de Servicio',
      caption: 'Más de 1,500 centros de servicio en 150+ países con disponibilidad de repuestos.',
    },
  ];
}
