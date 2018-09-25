import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from "@angular/material";
@NgModule({
  imports: [
    MatButtonModule,
     MatToolbarModule,
      MatIconModule,
      MatCardModule
  ],
  exports: [
    MatButtonModule,
     MatToolbarModule,
      MatIconModule,
      MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
