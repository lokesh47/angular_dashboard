import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceRoutingModule } from './advance-routing.module';
import { ListComponent } from './list/list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FilelistComponent } from './filelist/filelist.component';
import { RoutersComponent } from './routers/routers.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CrudComponent } from './crud/crud.component';
import { AdvanceComponent } from './advance.component';
import { SharedModule } from '../shared/shared.module';
import { PipelistComponent } from './pipelist/pipelist.component';
import { SqrtPipe } from './pipelist/sqrt.pipe';
import { SizeconvertPipe } from './pipelist/sizeconvert.pipe';
import { DirectivelistComponent } from './directivelist/directivelist.component';
import { ShadowDirective } from './directivelist/shadow.directive';


@NgModule({
  imports: [
    CommonModule,
    AdvanceRoutingModule,
    SharedModule
  ],
  declarations: [
    ListComponent,
    GalleryComponent,
    FilelistComponent,
    RoutersComponent,
    ParentComponent,
    ChildComponent,
    CrudComponent,
    AdvanceComponent,
    PipelistComponent,
    SqrtPipe,
    SizeconvertPipe,
    DirectivelistComponent,
    ShadowDirective
  ]
})
export class AdvanceModule { }
