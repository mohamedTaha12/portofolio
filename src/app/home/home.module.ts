import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WhatIDoComponent } from './what-i-do/what-i-do.component';
import { SharedModule } from '../shared/shared.module';
import { WebDevelopmentComponent } from './what-i-do/web-development/web-development.component';
import { UiUxDesignComponent } from './what-i-do/ui-ux-design/ui-ux-design.component';
import { LayoutComponent } from './layout/layout.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    WhatIDoComponent,
    WebDevelopmentComponent,
    UiUxDesignComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CardModule,
  ],
})
export class HomeModule { }
