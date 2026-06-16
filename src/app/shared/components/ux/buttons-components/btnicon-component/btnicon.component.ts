import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-btnicon',
  templateUrl: './btnicon.component.html',
  styleUrl: './btnicon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnIconComponent {
  variant = input<'primary' | 'secondary' | 'ghost'>('primary');
  type = input<'button' | 'submit' | 'reset'>('button');
  iconPosition = input<'left' | 'right'>('left');
}
