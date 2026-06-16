import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-calltoaction',
  templateUrl: './calltoaction.component.html',
  styleUrl: './calltoaction.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallToActionComponent {
  title = input<string>('');
  description = input<string>('');
  bgImageUrl = input<string>('');
  eyebrow = input<string>('');
}
