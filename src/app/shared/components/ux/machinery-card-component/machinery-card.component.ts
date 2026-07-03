import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-machinery-card',
  imports: [RouterLink],
  templateUrl: './machinery-card.component.html',
  styleUrl: './machinery-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineryCardComponent {
  title = input<string>('');
  brand = input<string>('');
  image = input<string>('');
  route = input<string>('');
  specs = input<string[]>([]);
}
