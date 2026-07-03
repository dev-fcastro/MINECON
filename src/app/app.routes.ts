import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./features/productos/productos.component').then((m) => m.ProductosComponent),
  },
  {
    path: 'marcas',
    loadComponent: () =>
      import('./features/marcas/marcas.component').then((m) => m.MarcasComponent),
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./features/servicios/servicios.component').then((m) => m.ServiciosComponent),
  },
  {
    path: 'repuestos',
    loadComponent: () =>
      import('./features/repuestos/repuestos.component').then((m) => m.RepuestosComponent),
  },
  {
    path: 'alquiler',
    loadComponent: () =>
      import('./features/alquiler/alquiler.component').then((m) => m.AlquilerComponent),
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./features/nosotros/nosotros.component').then((m) => m.NosotrosComponent),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./features/contacto/contacto.component').then((m) => m.ContactoComponent),
  },
  {
    path: 'maquinaria-usada',
    loadComponent: () =>
      import('./features/maquinaria-usada/maquinaria-usada.component').then(
        (m) => m.MaquinariaUsadaComponent,
      ),
  },
  {
    path: 'dev',
    loadComponent: () =>
      import('./features/dev/dev.component').then((m) => m.DevComponent),
  },
  {
    path: 'marcas/volvo-construction-equipment',
    loadComponent: () =>
      import('./features/company/volvo-construction-equipment/volvo-construction-equipment.component').then((m) => m.VolvoConstructionEquipmentComponent),
  },
  {
    path: 'marcas/bobcat',
    loadComponent: () =>
      import('./features/company/bobcat/bobcat.component').then((m) => m.BobcatComponent),
  },
  {
    path: 'marcas/montabert',
    loadComponent: () =>
      import('./features/company/montabert/montabert.component').then((m) => m.MontabertComponent),
  },
  {
    path: 'marcas/michelin',
    loadComponent: () =>
      import('./features/company/michelin/michelin.component').then((m) => m.MichelinComponent),
  },
  {
    path: 'marcas/sinotruk',
    loadComponent: () =>
      import('./features/company/sinotruk/sinotruk.component').then((m) => m.SinotrukComponent),
  },
  {
    path: 'marcas/ghh-rand',
    loadComponent: () =>
      import('./features/company/ghh-rand/ghh-rand.component').then((m) => m.GhhRandComponent),
  },
  {
    path: 'marcas/toku',
    loadComponent: () =>
      import('./features/company/toku/toku.component').then((m) => m.TokuComponent),
  },
  {
    path: 'marcas/hiab',
    loadComponent: () =>
      import('./features/company/hiab/hiab.component').then((m) => m.HiabComponent),
  },
  {
    path: 'marcas/ingersoll-rand',
    loadComponent: () =>
      import('./features/company/ingersoll-rand/ingersoll-rand.component').then((m) => m.IngersollRandComponent),
  },
  {
    path: 'marcas/donaldson',
    loadComponent: () =>
      import('./features/company/donaldson/donaldson.component').then((m) => m.DonaldsonComponent),
  },
  {
    path: 'marcas/parker',
    loadComponent: () =>
      import('./features/company/parker/parker.component').then((m) => m.ParkerComponent),
  },
  {
    path: 'marcas/firman',
    loadComponent: () =>
      import('./features/company/firman/firman.component').then((m) => m.FirmanComponent),
  },
  {
    path: 'marcas/bull',
    loadComponent: () =>
      import('./features/company/bull/bull.component').then((m) => m.BullComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
