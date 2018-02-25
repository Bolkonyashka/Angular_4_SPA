import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }   from '@angular/common/http';


import { AppComponent } from './app.component';
import { ClientBlockComponent } from './client-block/client-block.component';
import { ActionBlock1Component } from './action-block/action-block-1/action-block-1.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { FooterBlockComponent } from './footer-block/footer-block.component';
import { ActionBlockComponent } from './action-block/action-block.component';
import { ActionBlock2Component } from './action-block/action-block-2/action-block-2.component';
import { ActionBlock3Component } from './action-block/action-block-3/action-block-3.component';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PayComponent } from './admin/pay/pay.component';
import { ReqpayComponent } from './admin/reqpay/reqpay.component';
import { LoginComponent } from './login/login.component'
import { routing } from './app.routing';
 
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';


//const appRoutes: Routes = [
  //{ path: 'admin', component: AdminComponent }, 
  //{ path: 'login', component: LoginComponent },
  //{ path: '', component: HomeComponent }
//]


@NgModule({
  declarations: [
    AppComponent,
    ClientBlockComponent,
    ActionBlock1Component,
    AboutCompanyComponent,
    FooterBlockComponent,
    ActionBlockComponent,
    ActionBlock2Component,
    ActionBlock3Component,
    AdminComponent,
    HomeComponent,
    PayComponent,
    ReqpayComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    HttpClientModule,
    routing
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
