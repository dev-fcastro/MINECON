
You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

---

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

---

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images. It does NOT work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

---

## MINECON — Diseño y Marca

### Paleta de colores (CSS custom properties en `styles.css`)

```css
--mc-primary:  #ec424d   /* rojo MINECON */
--mc-secondary: #424143  /* gris carbón */
--mc-bg-light:  #acabac  /* gris claro */
--mc-black:     #1a1a1a  /* negro */
--mc-white:     #ffffff  /* blanco */
```

### Tipografía

- **Archivo** variable font — Google Fonts, weights 100–900
- Cargada en `index.html` vía `<link>` de Google Fonts
- Sin fuentes alternativas; se asume disponibilidad en todo el proyecto

### Estilo industrial / cúbico

- `border-radius: 0 !important` globalmente en `styles.css` — sin esquinas redondeadas en nada
- Transiciones mecánicas: `steps(1, end)` para snaps instantáneos, no `ease` suave
- Efectos de botón: piston `::before` que desliza de `translateX(-101%)` a `translateX(0)` en hover

---

## MINECON — Estructura de la App

### Layout raíz (`app.component`)

```
app-root (flex column, min-height: 100vh)
  ├── app-header  (sticky top, z-index alto)
  │     └── app-navbar
  ├── main.app-main (flex: 1)  ← crece para empujar el footer hacia abajo
  │     └── <router-outlet>
  └── app-footer
```

- `app-root`: `display: flex; flex-direction: column; min-height: 100vh` — en `styles.css`
- `.app-main`: `flex: 1` — en `app.css` — sticky footer pattern
- Header: `position: sticky; top: 0` — siempre visible

### Rutas (`app.routes.ts`)

Todas con `loadComponent` (lazy loading):

| Path | Componente |
|---|---|
| `` (home) | `HomeComponent` |
| `productos` | `ProductosComponent` |
| `marcas` | `MarcasComponent` |
| `servicios` | `ServiciosComponent` |
| `repuestos` | `RepuestosComponent` |
| `alquiler` | `AlquilerComponent` |
| `nosotros` | `NosotrosComponent` |
| `contacto` | `ContactoComponent` |
| `maquinaria-usada` | `MaquinariaUsadaComponent` |
| `dev` | `DevComponent` (playground) |
| `marcas/volvo-construction-equipment` | `VolvoConstructionEquipmentComponent` |
| `marcas/bobcat` | `BobcatComponent` |
| `marcas/montabert` | `MontabertComponent` |
| `marcas/michelin` | `MichelinComponent` |
| `marcas/sinotruk` | `SinotrukComponent` |
| `marcas/ghh-rand` | `GhhRandComponent` |
| `marcas/toku` | `TokuComponent` |
| `marcas/hiab` | `HiabComponent` |
| `marcas/ingersoll-rand` | `IngersollRandComponent` |
| `marcas/donaldson` | `DonaldsonComponent` |
| `marcas/parker` | `ParkerComponent` |
| `marcas/firman` | `FirmanComponent` |
| `marcas/bull` | `BullComponent` |
| `**` | redirect a `` |

---

## MINECON — Componentes compartidos

### Estructura de carpetas

```
src/app/
  features/
    home/               ← hero + marquee
    dev/                ← playground en /dev (NO es home)
    layout/
      navbar-component/
      footer-component/
      sidebar-component/
    company/            ← 13 carpetas (una por marca)
  shared/
    components/
      structure-components/
        infinitelogomarquee-component/
        calltoaction-component/
        ...
      ux/
        title-component/
        paragraph-component/
        buttons-components/
          btn-component/
          btnbrand-component/
          btnicon-component/
```

### Home (`/`)

- Hero de pantalla completa: `height: calc(100svh - 103px)` donde 103px = altura del header
- `.home-fold { display: flex; flex-direction: column; height: calc(100svh - 103px) }`
- `.hero { position: relative; flex: 1; min-height: 0; overflow: hidden }`
- Imagen con `NgOptimizedImage` (`fill`, `priority`, `object-fit: cover`)
- `app-infinitelogomarquee` pegado debajo del hero dentro del `.home-fold`

### Marquee de logos (`app-infinitelogomarquee`)

Interfaz `MarqueeItem`:
```typescript
export interface MarqueeItem {
  name: string;
  logoSrc: string;
  route: string;        // ruta Angular interna para routerLink
  logoWidth?: number;   // px — control individual por logo
  logoHeight?: number;  // px — control individual por logo
}
```

- `duplicatedItems = computed(() => [...items, ...items])` para loop infinito
- Cada ítem es `<a [routerLink]="item.route">` (clickeable)
- Logos: `filter: brightness(0) invert(1); opacity: 1` — blanco puro
- Tamaño por defecto: `180×60px` con `object-fit: contain`
- Para control individual usar `logoWidth`/`logoHeight` en los datos, no en el CSS
- `(error)="hideImg($event)"` oculta silenciosamente imágenes rotas

### Navbar

- Fondo blanco, `position: sticky; top: 0`
- Active state: color rojo + borde rojo ÚNICAMENTE (sin tint de fondo)
- Hamburguesa: `background-color: var(--mc-secondary)`
- Fuente nav: 11px, `font-weight: 900`, `text-transform: uppercase`, `letter-spacing: 0.2em`
- Logo: `<img src="/MineconIMG/LogoCompanyName.svg">`

### Footer

- `background-color: #2b2b2d`
- `border-top: 4px solid var(--mc-primary)`
- Grid 5 columnas en desktop
- **Brand matrix**: 2 columnas, borde tipo colapso (container: `border-top + border-left`; celdas: `border-right + border-bottom`)
- Logos de marcas en celdas: `filter: brightness(0) invert(1); height: 20px; width: 100%`
- Partner logos (bottom): clases separadas `.footer-partner-logo--volvo` y `.footer-partner-logo--sinotruk` para tamaño independiente — Volvo tiene trazos más gruesos y necesita `height` menor para igualar peso visual

### Botones

**`app-btn`** (variantes: `primary`, `secondary`, `ghost`):
- Patrón piston: `::before` desliza de `translateX(-101%)` a `translateX(0)` en hover
- Label con `position: relative; z-index: 1` para quedar sobre el piston
- Primary piston: negro. Secondary piston: `var(--mc-secondary)`.

**`app-btnbrand`** (con flecha):
- Piston + Solid Border Shift: `transform: translate(-2px,-2px); box-shadow: 4px 4px 0 var(--mc-secondary)`
- Flecha: `transition: transform 0.08s steps(1, end)`

**`app-btnicon`**:
- Ghost: snap de color con `steps(1, end)`, sin fill

### Title (`app-title`)

- Pilar vertical rojo si hay `eyebrow()`: `host: { '[class.has-pillar]': 'eyebrow()' }`
- `:host.has-pillar { border-left: 5px solid var(--mc-primary); padding-left: 16px }`
- Color base: `var(--mc-black)`

### CTA (`app-calltoaction`)

- Fondo oscuro con overlay
- `::ng-deep .mc-btn--secondary` overrides para contexto oscuro (texto blanco)
- Eyebrow: `border-left: 5px solid var(--mc-primary); padding-left: 14px`

---

## MINECON — Assets e Imágenes

### Carpetas en `public/`

```
public/
  MineconIMG/
    LogoCompanyName.svg    ← logo principal (st0=none, st1=gris, st2=rojo)
    header_img.png         ← hero del home
  VolvoConstructionEquipmentIMG/
    volvo-logo-texto.svg   ← SVG real (era .png con extensión incorrecta)
    volvo-imagen-completa-logo.png
  BobcatIMG/bobcat-logo-texto.png           (WebP real, renombrado)
  MontabertIMG/montabert-logo-texto.png     (fondos rojo/verde eliminados con ImageMagick)
  MichelinIMG/michelin-logo-texto.png
  SinotrukIMG/sinotruk-logo-texto.png       (WebP real)
  GHHRandIMG/ghhrand-logo-texto.webp
  TokuIMG/tuku-logo-texto.png               ← typo intencional "tuku" en filename
  HiabIMG/hiab-logo-texto.png               (bg blanco eliminado con ImageMagick)
  IngersollRandIMG/ingersollrand-logo-texto.png
  DonaldsonIMG/donaldson-logo-texto.png
  ParkerIMG/parker-logo-texto.png
  FirmanIMG/firman-logo-texto.svg
  BullIMG/bull-logo-texto.png
```

### Convenciones de imagen

- Logos sobre fondos oscuros: `filter: brightness(0) invert(1)` — convierte cualquier color a blanco puro
- Esta filter NO requiere que la imagen sea blanca; funciona con cualquier color
- Logos con padding transparente excesivo: usar ImageMagick `magick img.png -trim +repage img.png`
- Logos con bg de color sólido: `magick img.png -fuzz 25% -transparent "rgb(r,g,b)" -trim +repage img.png`
- SVG con extensión incorrecta (.png): renombrar a .svg — el browser falla si el MIME type no coincide
- `NgOptimizedImage` solo para imágenes estáticas con `fill` o dimensiones conocidas. NO para base64.

### Logo MINECON SVG

Clases CSS internas del SVG:
- `st0 { fill: none }` — elementos blancos (interior del engranaje, tagline) — transparente
- `st1 { fill: #424143 }` — letras MINECON en gris carbón
- `st2 { fill: #ec424d }` — letra M en rojo

---

## MINECON — Marcas representadas

13 marcas, cada una con:
- Componente Angular en `src/app/features/company/<nombre>/`
- Carpeta de imágenes en `public/<NombreIMG>/`
- Ruta registrada como `marcas/<slug>`

| Marca | Slug | Carpeta IMG |
|---|---|---|
| Volvo Construction Equipment | `volvo-construction-equipment` | `VolvoConstructionEquipmentIMG` |
| Bobcat | `bobcat` | `BobcatIMG` |
| Montabert | `montabert` | `MontabertIMG` |
| Michelin | `michelin` | `MichelinIMG` |
| Sinotruk (CNHTC) | `sinotruk` | `SinotrukIMG` |
| GHH Rand | `ghh-rand` | `GHHRandIMG` |
| Toku | `toku` | `TokuIMG` |
| Hiab | `hiab` | `HiabIMG` |
| Ingersoll Rand | `ingersoll-rand` | `IngersollRandIMG` |
| Donaldson | `donaldson` | `DonaldsonIMG` |
| Parker | `parker` | `ParkerIMG` |
| Firman | `firman` | `FirmanIMG` |
| Bull | `bull` | `BullIMG` |
