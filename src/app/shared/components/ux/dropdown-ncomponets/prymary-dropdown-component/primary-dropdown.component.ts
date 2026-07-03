import { Component, input, model, ChangeDetectionStrategy } from '@angular/core';

export interface DropdownOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-primary-dropdown',
  template: `
    <div class="mc-dropdown">
      @if (label()) {
        <label class="mc-dropdown__label" [attr.for]="fieldId()">
          {{ label() }}
        </label>
      }
      <div class="mc-dropdown__wrapper">
        <select
          class="mc-dropdown__select"
          [id]="fieldId()"
          [disabled]="disabled()"
          [value]="value()"
          (change)="onChange($event)"
          [attr.aria-label]="!label() ? placeholder() : null"
          [attr.aria-required]="required() || null"
        >
          @if (placeholder()) {
            <option value="" [selected]="!value()">{{ placeholder() }}</option>
          }
          @for (opt of options(); track opt.value) {
            <option [value]="opt.value" [selected]="value() === opt.value">
              {{ opt.label }}
            </option>
          }
        </select>
        <span class="mc-dropdown__chevron" aria-hidden="true">▼</span>
      </div>
    </div>
  `,
  styles: [
    `
      .mc-dropdown {
        display: flex;
        flex-direction: column;
        gap: 7px;
        width: 100%;
      }

      .mc-dropdown__label {
        font-size: 9px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.25em;
        color: var(--mc-secondary);
      }

      .mc-dropdown__wrapper {
        position: relative;
        width: 100%;
      }

      .mc-dropdown__select {
        width: 100%;
        padding: 13px 44px 13px 16px;
        background-color: var(--mc-white);
        border: 1px solid rgba(66, 65, 67, 0.35);
        color: var(--mc-black);
        font-size: 14px;
        font-family: inherit;
        outline: none;
        appearance: none;
        cursor: pointer;
        transition:
          border-color 0.15s ease,
          background-color 0.15s ease;
        letter-spacing: 0.02em;
      }

      .mc-dropdown__select option {
        background-color: var(--mc-white);
        color: var(--mc-black);
      }

      .mc-dropdown__select:focus {
        border-color: var(--mc-primary);
        background-color: rgba(236, 66, 77, 0.04);
      }

      .mc-dropdown__select:disabled {
        opacity: 0.35;
        cursor: not-allowed;
      }

      .mc-dropdown__chevron {
        position: absolute;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 9px;
        color: rgba(66, 65, 67, 0.5);
        pointer-events: none;
        line-height: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryDropdownComponent {
  value = model<string>('');
  label = input<string>('');
  placeholder = input<string>('');
  options = input<DropdownOption[]>([]);
  disabled = input<boolean>(false);
  required = input<boolean>(false);
  fieldId = input<string>('mc-dropdown');

  onChange(event: Event): void {
    this.value.set((event.target as HTMLSelectElement).value);
  }
}
