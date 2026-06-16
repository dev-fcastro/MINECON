import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  InfiniteLogoMarqueeComponent,
  MarqueeItem,
} from '../../shared/components/structure-components/infinitelogomarquee-component/infinitelogomarquee.component';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, InfiniteLogoMarqueeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly marqueeItems: MarqueeItem[] = [
    { name: 'Volvo Construction Equipment', logoSrc: '/VolvoConstructionEquipmentIMG/volvo-logo-texto.png', route: '/marcas/volvo-construction-equipment' },
    { name: 'Bobcat',                       logoSrc: '/BobcatIMG/bobcat-logo-texto.png',                   route: '/marcas/bobcat' },
    { name: 'Montabert',                    logoSrc: '/MontabertIMG/montabert-logo-texto.png',             route: '/marcas/montabert' },
    { name: 'Michelin',                     logoSrc: '/MichelinIMG/michelin-logo-texto.png',               route: '/marcas/michelin' },
    { name: 'Sinotruk',                     logoSrc: '/SinotrukIMG/sinotruk-logo-texto.png',               route: '/marcas/sinotruk' },
    { name: 'GHH Rand',                     logoSrc: '/GHHRandIMG/ghhrand-logo-texto.png',                 route: '/marcas/ghh-rand' },
    { name: 'Toku',                         logoSrc: '/TokuIMG/tuku-logo-texto.png',                       route: '/marcas/toku' },
    { name: 'Hiab',                         logoSrc: '/HiabIMG/hiab-logo-texto.png',                       route: '/marcas/hiab' },
    { name: 'Ingersoll Rand',               logoSrc: '/IngersollRandIMG/ingersollrand-logo-texto.png',     route: '/marcas/ingersoll-rand' },
    { name: 'Donaldson',                    logoSrc: '/DonaldsonIMG/donaldson-logo-texto.png',             route: '/marcas/donaldson' },
    { name: 'Parker',                       logoSrc: '/ParkerIMG/parker-logo-texto.png',                   route: '/marcas/parker' },
    { name: 'Firman',                       logoSrc: '/FirmanIMG/firman-logo-texto.png',                   route: '/marcas/firman' },
    { name: 'Bull',                         logoSrc: '/BullIMG/bull-logo-texto.png',                       route: '/marcas/bull' },
  ];
}
