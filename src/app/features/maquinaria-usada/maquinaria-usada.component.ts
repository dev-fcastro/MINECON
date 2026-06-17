import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SliderComponent, SliderImage } from '../../shared/components/structure-components/slider-componet/slider.component';
import { TitleComponent } from '../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../shared/components/ux/paragraph-component/paragraph.component';
import { MachineryCardComponent } from '../../shared/components/ux/machinery-card-component/machinery-card.component';
import { CallToActionComponent } from '../../shared/components/structure-components/calltoaction-component/calltoaction.component';

export interface UsedMachineCategory {
  label: string;
  slug: string;
}

export interface UsedMachine {
  title: string;
  brand: string;
  image: string;
  route: string;
  specs: string[];
  category: string;
}

@Component({
  selector: 'app-maquinaria-usada',
  imports: [
    RouterLink,
    SliderComponent,
    TitleComponent,
    ParagraphComponent,
    MachineryCardComponent,
    CallToActionComponent,
  ],
  templateUrl: './maquinaria-usada.component.html',
  styleUrl: './maquinaria-usada.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaquinariaUsadaComponent {
  readonly heroSlides: SliderImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop',
      alt: 'Maquinaria usada certificada — MINECON',
      label: 'Maquinaria Usada',
      caption: 'EQUIPOS CERTIFICADOS, DESEMPEÑO GARANTIZADO.',
    },
    {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop',
      alt: 'Equipos de construcción y minería seminuevos disponibles',
      label: 'Stock Disponible',
      caption: 'INSPECCIÓN TÉCNICA Y RESPALDO POSVENTA INCLUIDOS.',
    },
  ];

  readonly categories: UsedMachineCategory[] = [
    { label: 'Todos', slug: 'todos' },
    { label: 'Excavadoras', slug: 'excavadoras' },
    { label: 'Cargadores', slug: 'cargadores' },
    { label: 'Compactadoras', slug: 'compactadoras' },
    { label: 'Camiones', slug: 'camiones' },
    { label: 'Compresores', slug: 'compresores' },
  ];

  readonly usedMachinery: UsedMachine[] = [
    {
      title: 'Excavadora EC220E',
      brand: 'Volvo CE',
      image: 'https://images.unsplash.com/photo-1579616790875-af7fbc5a5cf2?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
      specs: ['Año 2019', '3,200 horas', 'Motor Volvo D6J', 'Balde 1.1 m³'],
      category: 'excavadoras',
    },
    {
      title: 'Cargador Frontal L150H',
      brand: 'Volvo CE',
      image: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
      specs: ['Año 2018', '4,500 horas', 'Motor Volvo D13J', 'Cucharon 4.5 m³'],
      category: 'cargadores',
    },
    {
      title: 'Compactador SD115',
      brand: 'Volvo CE',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
      specs: ['Año 2020', '1,800 horas', 'Tambor de 2.13 m', 'Peso operativo 11.5 t'],
      category: 'compactadoras',
    },
    {
      title: 'Tractocamión HOWO T7H 440',
      brand: 'Sinotruk',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
      specs: ['Año 2021', '180,000 km', 'Motor WD615 440 HP', '6×4'],
      category: 'camiones',
    },
    {
      title: 'Compresor Portátil XP375',
      brand: 'Ingersoll Rand',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
      specs: ['Año 2020', '2,100 horas', '375 CFM / 150 PSI', 'Motor Deutz'],
      category: 'compresores',
    },
    {
      title: 'Minicargador S450',
      brand: 'Bobcat',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
      route: '/contacto',
      specs: ['Año 2022', '900 horas', 'Capacidad 975 kg', 'Motor Kubota'],
      category: 'cargadores',
    },
  ];
}
