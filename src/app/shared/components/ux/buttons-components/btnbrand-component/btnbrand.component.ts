import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-btnbrand',
  host: { class: 'mc-btn-brand-host' },
  templateUrl: './btnbrand.component.html',
  styleUrl: './btnbrand.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnBrandComponent {
  type = input<'button' | 'submit' | 'reset'>('button');
  ariaLabel = input<string>('');
}
