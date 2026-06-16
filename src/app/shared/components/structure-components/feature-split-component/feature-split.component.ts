import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../ux/title-component/title.component';
import { ParagraphComponent } from '../../ux/paragraph-component/paragraph.component';

export interface FeatureSplitItem {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  route?: string;
  ctaLabel?: string;
}

@Component({
  selector: 'app-feature-split',
  imports: [RouterLink, TitleComponent, ParagraphComponent],
  templateUrl: './feature-split.component.html',
  styleUrl: './feature-split.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSplitComponent {
  items = input<FeatureSplitItem[]>([]);
}
