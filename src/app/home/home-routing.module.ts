import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactUsComponent } from '../contact-us/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact-us',
        loadChildren: () => import(`./../contact-us/contact-us.module`).then(m => m.ContactUsModule)
      },
      {
        path: 'resume',
        loadChildren: () => import(`./../resume/resume.module`).then(m => m.ResumeModule)
      },
      {
        path: 'work',
        loadChildren: () => import(`./../work/work.module`).then(m => m.WorkModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
