import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent
  },
  {
    path: 'layout', 
    component: LayoutComponent
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'basics', 
    loadChildren:'../app/components/basics/basics.module#BasicsModule'
  },
  {
    path: 'advance', 
    loadChildren:'../app/components/advance/advance.module#AdvanceModule'
  },
  { 
    path: '**', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
