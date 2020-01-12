//Inbuilt Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Custom Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//Custom Service
import { UserlistService } from './services/userlist.service';
import { CrudService } from './services/crud.service';

//Custom Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopMenuComponent,
    SideMenuComponent,
    FooterComponent,
    ComponentsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    UserlistService,
    CrudService
  ],
  exports: [
  
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
