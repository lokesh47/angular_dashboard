import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatDialogModule, MatIconModule
  ],
  exports: [
    MatButtonModule, MatDialogModule, MatIconModule
  ]
})
export class CustomMaterialModule {
}