import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from './home/home.module';
import { ArticleModule } from './article/article.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgetComponent } from './auth/forget/forget.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RoutingModule } from './routing.module';
import { TextboxComponent } from './shared/textbox/textbox.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    HeaderComponent,
    FooterComponent,
    TextboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    SharedModule,
    ArticleModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
