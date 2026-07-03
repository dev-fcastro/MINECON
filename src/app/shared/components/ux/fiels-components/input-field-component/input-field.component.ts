import { Component, input, model, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-input-field',
  template: `
    <div class="mc-field">
      @if (label()) {
        <label class="mc-field__label" [attr.for]="fieldId()">
          {{ label() }}
        </label>
      }
      <input
        class="mc-field__input"
        [id]="fieldId()"
        [type]="type()"
        [placeholder]="placeholder()"
        [disabled]="disabled()"
        [required]="required()"
        [value]="value()"
        (input)="onInput($event)"
        [attr.aria-describedby]="hint() ? fieldId() + '-hint' : null"
        [attr.aria-label]="!label() ? placeholder() : null"
        [attr.aria-required]="required() || null"
      />
      @if (hint()) {
        <span class="mc-field__hint" [id]="fieldId() + '-hint'">{{ hint() }}</span>
      }
    </div>
  `,
  styles: [
    `
      .mc-field {
        display: flex;
        flex-direction: column;
        gap: 7px;
        width: 100%;
      }

      .mc-field__label {
        font-size: 9px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.25em;
        color: var(--mc-secondary);
      }

      .mc-field__input {
        width: 100%;
        padding: 13px 16px;
        background-color: var(--mc-white);
        border: 1px solid rgba(66, 65, 67, 0.35);
        color: var(--mc-black);
        font-size: 14px;
        font-family: inherit;
        outline: none;
        transition:
          border-color 0.15s ease,
          background-color 0.15s ease;
        letter-spacing: 0.02em;
      }

      .mc-field__input::placeholder {
        color: rgba(66, 65, 67, 0.35);
        font-weight: 400;
      }

      .mc-field__input:focus {
        border-color: var(--mc-primary);
        background-color: rgba(236, 66, 77, 0.04);
      }

      .mc-field__input:disabled {
        opacity: 0.35;
        cursor: not-allowed;
      }

      .mc-field__hint {
        font-size: 10px;
        color: rgba(66, 65, 67, 0.6);
        letter-spacing: 0.06em;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldComponent {
  value = model<string>('');
  label = input<string>('');
  placeholder = input<string>('');
  type = input<'text' | 'number' | 'email' | 'password' | 'tel' | 'search'>('text');
  disabled = input<boolean>(false);
  required = input<boolean>(false);
  hint = input<string>('');
  fieldId = input<string>('mc-field');

  onInput(event: Event): void {
    this.value.set((event.target as HTMLInputElement).value);
  }
}
