import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { TitleComponent } from '../../shared/components/ux/title-component/title.component';
import { ParagraphComponent } from '../../shared/components/ux/paragraph-component/paragraph.component';
import { InputFieldComponent } from '../../shared/components/ux/fiels-components/input-field-component/input-field.component';
import { PrimaryDropdownComponent, DropdownOption } from '../../shared/components/ux/dropdown-ncomponets/prymary-dropdown-component/primary-dropdown.component';
import { CallToActionComponent } from '../../shared/components/structure-components/calltoaction-component/calltoaction.component';

@Component({
  selector: 'app-contacto',
  imports: [
    TitleComponent,
    ParagraphComponent,
    InputFieldComponent,
    PrimaryDropdownComponent,
    CallToActionComponent,
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent {
  readonly nombre = signal('');
  readonly empresa = signal('');
  readonly email = signal('');
  readonly telefono = signal('');
  readonly interes = signal('');
  readonly mensaje = signal('');

  readonly interesOptions: DropdownOption[] = [
    { value: 'construccion-mineria', label: 'División Construcción & Minería' },
    { value: 'industrial', label: 'División Industrial' },
    { value: 'vehiculos-carga', label: 'Vehículos de Carga (Sinotruk)' },
    { value: 'energia', label: 'División Energía (Firman)' },
    { value: 'repuestos', label: 'Repuestos' },
    { value: 'servicios', label: 'Servicios y Mantenimiento' },
    { value: 'alquiler', label: 'Alquiler de Equipos' },
    { value: 'otro', label: 'Otro' },
  ];

  onMensajeInput(event: Event): void {
    this.mensaje.set((event.target as HTMLTextAreaElement).value);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // Form submission logic — connect to backend/service as needed
  }
}
