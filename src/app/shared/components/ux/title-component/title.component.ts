import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.has-pillar]': 'eyebrow()',
  },
})
export class TitleComponent {
  level = input<'h1' | 'h2' | 'h3' | 'h4'>('h2');
  variant = input<'display' | 'section' | 'sub'>('section');
  text = input<string>('');
  eyebrow = input<string>('');
  color = input<string>('');
  eyebrowColor = input<string>('');
}
