import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PrerequisiteComponent } from './prerequisite/prerequisite.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { InstallationComponent } from './installation/installation.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { BasicsComponent } from './basics.component';

const routes: Routes = [
  {
    path: '', 
    component: BasicsComponent,
    children:
    [
      {path: 'about', component: AboutComponent},
      {path: 'prerequisite', component: PrerequisiteComponent},
      {path: 'introduction', component: IntroductionComponent},
      {path: 'architecture', component: ArchitectureComponent},
      {path: 'installation', component: InstallationComponent},
      {path: 'lifecycle', component: LifecycleComponent},
      {path: 'datatypes', component: DatatypesComponent},
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicsRoutingModule { }
