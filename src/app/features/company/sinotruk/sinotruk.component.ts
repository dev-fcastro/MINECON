import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../../shared/components/ux/paragraph-component/paragraph.component';
import { CallToActionComponent } from '../../../shared/components/structure-components/calltoaction-component/calltoaction.component';

interface SinotrukModel {
  title: string;
  series: string;
  hp: string;
  config: string;
  use: string;
  image: string;
}

@Component({
  selector: 'app-sinotruk',
  imports: [NgOptimizedImage, RouterLink, TitleComponent, ParagraphComponent, CallToActionComponent],
  templateUrl: './sinotruk.component.html',
  styleUrl: './sinotruk.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinotrukComponent {

  readonly models: SinotrukModel[] = [
    {
      title: 'HOWO T7H',
      series: 'Heavy Truck',
      hp: '380 — 540 HP',
      config: '4×2 / 6×4 / 8×4',
      use: 'Tractocamión de larga distancia y faena pesada.',
      image: '/SinotrukIMG/vehiculos/camion_random_que_se_ve_bien.png',
    },
    {
      title: 'HOWO T5G',
      series: 'Heavy Truck',
      hp: '210 — 340 HP',
      config: '4×2 / 6×4',
      use: 'Transporte de carga pesada en rutas nacionales.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=900&auto=format&fit=crop',
    },
    {
      title: 'HOWO A7',
      series: 'Heavy Truck',
      hp: '380 — 420 HP',
      config: '6×4 / 8×4',
      use: 'Camión volquete para minería y construcción.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=900&auto=format&fit=crop',
    },
    {
      title: 'HOWO C7H',
      series: 'Heavy Truck',
      hp: '420 — 540 HP',
      config: '6×4',
      use: 'Tractor de alto rendimiento para transporte pesado.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=900&auto=format&fit=crop',
    },
    {
      title: 'HOWO Ligero',
      series: 'Light Truck',
      hp: '120 — 200 HP',
      config: '4×2',
      use: 'Distribución y logística urbana e interurbana.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=900&auto=format&fit=crop',
    },
    {
      title: 'New Energy',
      series: 'Vehículo Eléctrico',
      hp: 'Motor eléctrico',
      config: '4×2 / 6×4',
      use: 'Soluciones de transporte eléctrico y sustentable.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900&auto=format&fit=crop',
    },
  ];

  readonly techItems = [
    {
      iconPath: 'M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.3.07-.62.07-.96 0-.34-.03-.66-.07-1l2.16-1.68c.2-.16.25-.44.12-.66l-2.04-3.54c-.13-.22-.41-.3-.63-.22l-2.54 1.03c-.54-.42-1.12-.76-1.74-1.04l-.38-2.68C14.16 3.26 14 3.1 13.76 3H10.24c-.24 0-.4.16-.44.4l-.38 2.68c-.62.28-1.2.62-1.74 1.04L5.14 6.09c-.22-.08-.5 0-.63.22L2.47 9.85c-.13.22-.08.5.12.66l2.16 1.68c-.04.34-.07.67-.07 1 0 .33.03.66.07.96l-2.16 1.68c-.2.16-.25.44-.12.66l2.04 3.54c.13.22.41.3.63.22l2.54-1.03c.54.42 1.12.76 1.74 1.04l.38 2.68c.04.24.2.4.44.4h3.52c.24 0 .4-.16.44-.4l.38-2.68c.62-.28 1.2-.62 1.74-1.04l2.54 1.03c.22.08.5 0 .63-.22l2.04-3.54c.13-.22.08-.5-.12-.66l-2.16-1.68z',
      title: 'Potencia 210–540 CV',
      desc: 'Motores propios de alta eficiencia fabricados en Jinan, con tecnología derivada de la cooperación con MAN.',
    },
    {
      iconPath: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
      title: 'Seguridad Activa',
      desc: 'Cabinas de alta resistencia y sistemas de seguridad certificados internacionalmente.',
    },
    {
      iconPath: 'M17 8C8 10 5.9 16.17 3.82 20.31A4 4 0 0 0 8 22c4 0 6-3 8-6s5-5 8-5c-2-4-5-3-7-3z',
      title: 'Control de Emisiones',
      desc: 'Tecnología Euro V y VI para cumplimiento de estándares medioambientales globales.',
    },
    {
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
      title: 'Red Global de Servicio',
      desc: 'Más de 1,500 centros de servicio en 150+ países con disponibilidad de repuestos.',
    },
  ];
}
