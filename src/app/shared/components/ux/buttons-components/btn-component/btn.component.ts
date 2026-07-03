import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnComponent {
  variant = input<'primary' | 'secondary'>('primary');
  type = input<'button' | 'submit' | 'reset'>('button');
}
