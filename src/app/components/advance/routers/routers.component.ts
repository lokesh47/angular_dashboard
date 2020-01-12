import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.css']
})
export class RoutersComponent implements OnInit {


  base_url:any            = "<base href='/'>";
  routing_import:string   = "import { RouterModule, Routes } from '@angular/router';";
  config_routes:any       = "const routes: Routes = [ {path: 'layout', component: LayoutComponent} ];";
  set_routes:any          = "export const routing = RouterModule.forRoot(routes);";
  router_outlet:any       = "<router-outlet></router-outlet>";
  router_link:any         = " <a routerLink='/heroes routerLinkActive='active'>Heroes</a>";
  param_routes:any        = "const routes: Routes = [ {path: 'user/:id', component: UserComponent} ];";
  multi_routes:any        = "const routes: Routes = [ {path: 'user/:id/:id2', component: UserComponent} ];";
  lazy_load:any           = "const routes: Routes = [ path: 'lazymodule', loadChildren: './lazymodule/lazymodule.module#LazyModuleModule'  ];";


  constructor() { }

  ngOnInit() {
  }

}
