import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfiguracionRoutingModule } from './configuracion-router.module';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfiguracionRoutingModule,
  ],
})
export class ConfiguracionModule {}
