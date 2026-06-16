import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ServiceItem {
  title: string;
  description: string;
  route: string;
  iconPath: string;
  bgImage: string;
}

@Component({
  selector: 'app-services-accordion',
  imports: [RouterLink],
  templateUrl: './services-accordion.component.html',
  styleUrl: './services-accordion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesAccordionComponent {
  readonly services: ServiceItem[] = [
    {
      title: 'Disponibilidad',
      description: 'Mantenemos tu flota en operación con planes de servicio preventivo y correctivo. Nuestros técnicos certificados actúan con tiempos de respuesta mínimos para eliminar paradas no planificadas y garantizar la continuidad de tus operaciones.',
      route: '/servicios',
      iconPath: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
      bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Eficiencia de Combustible',
      description: 'Monitoreamos y optimizamos el consumo de tu flota con herramientas de análisis predictivo. Identificamos oportunidades de ahorro, ajustamos ciclos de mantenimiento y reducimos el costo operativo por hora de máquina de forma medible.',
      route: '/servicios',
      iconPath: 'M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z',
      bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Seguridad',
      description: 'Protegemos tu equipo humano y tus activos con programas de gestión de riesgo industriales. Reducimos la probabilidad de accidentes, interrupciones operativas y costos inesperados mediante inspecciones, protocolos y capacitación continua.',
      route: '/servicios',
      iconPath: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
      bgImage: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Repuestos',
      description: 'Disponemos de stock permanente de repuestos originales para todas las marcas que representamos. Garantizamos entrega rápida a obra o taller con trazabilidad completa, asegurando el funcionamiento correcto y la garantía de tu maquinaria.',
      route: '/repuestos',
      iconPath: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.21.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
      bgImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1400&auto=format&fit=crop',
    },
  ];
}
