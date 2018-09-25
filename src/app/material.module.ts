import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule } from "@angular/material";
@NgModule({
  imports: [
    MatButtonModule,
     MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule
  ],
  exports: [
    MatButtonModule,
     MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule
  ],
  declarations: []
})
export class MaterialModule { }
