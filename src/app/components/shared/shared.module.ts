import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule, 
    MatDialogModule,
    ToastrModule.forRoot(),
    CustomMaterialModule,
    
  ],
  exports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule, 
    MatDialogModule,
    ToastrModule,
    CustomMaterialModule
  ],
  declarations: [ConfirmDialogComponent],
  entryComponents: [
    ConfirmDialogComponent
    ],
})
export class SharedModule { }
