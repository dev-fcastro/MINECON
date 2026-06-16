import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParagraphComponent {
  variant = input<'body' | 'lead' | 'caption'>('body');
}
