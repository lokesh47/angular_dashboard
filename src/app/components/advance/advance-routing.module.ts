import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FilelistComponent } from './filelist/filelist.component';
import { ParentComponent } from './parent/parent.component';
import { CrudComponent } from './crud/crud.component';
import { RoutersComponent } from './routers/routers.component';
import { AdvanceComponent } from './advance.component';
import { PipelistComponent } from './pipelist/pipelist.component';
import { DirectivelistComponent } from './directivelist/directivelist.component';

const routes: Routes = [
  {
    path: '', 
    component: AdvanceComponent,
    children:[
      {path: 'list', component: ListComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'filelist', component: FilelistComponent},
      {path: 'parent', component: ParentComponent},
      {path: 'crud', component: CrudComponent},
      {path: 'router', component: RoutersComponent},
      {path: 'pipelist', component: PipelistComponent},
      {path: 'directive', component: DirectivelistComponent},
    ]
   },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 
})
export class AdvanceRoutingModule { }
