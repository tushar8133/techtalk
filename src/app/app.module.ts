import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Test1Component } from './test1/test1.component';
import { LoaderComponent } from './loader/loader.component';
import { AppInterceptor } from './app.interceptor';
import { CommonModule } from '@angular/common';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    Test1Component,
    Test2Component,
    Test3Component,
      ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppService,
    // { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
