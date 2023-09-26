


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CvComponent } from './cv/cv.component';
import { TabMenuModule } from 'primeng/tabmenu';
@NgModule({
  declarations: [
    NavBarComponent,
    InformationComponent,
    FooterComponent,
    CvComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    TabMenuModule
  ],
  exports: [
    NavBarComponent,
    InformationComponent,
    FooterComponent
  ]
})
export class SharedModule { }
