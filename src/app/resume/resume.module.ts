import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    PanelModule,
    AccordionModule
  ]
})
export class ResumeModule { }
