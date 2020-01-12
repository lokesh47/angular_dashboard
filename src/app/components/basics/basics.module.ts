import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsRoutingModule } from './basics-routing.module';
import { AboutComponent } from './about/about.component';
import { PrerequisiteComponent } from './prerequisite/prerequisite.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { InstallationComponent } from './installation/installation.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { BasicsComponent } from './basics.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BasicsRoutingModule,
    SharedModule
  ],
  declarations: [
    AboutComponent,
    PrerequisiteComponent,
    IntroductionComponent,
    ArchitectureComponent,
    InstallationComponent,
    LifecycleComponent,
    DatatypesComponent,
    BasicsComponent
  ],
  
})
export class BasicsModule { }
