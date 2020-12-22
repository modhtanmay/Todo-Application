import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { ListtodosComponent } from './components/listtodos/listtodos.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoComponent } from './components/todo/todo.component';
import { HttpIntercepterBasicAuthService } from './services/http/http-intercepter-basic-auth.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        WelcomeComponent,
        ErrorComponent,
        ListtodosComponent,
        MenuComponent,
        FooterComponent,
        LogoutComponent,
        TodoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, FormsModule, HttpClientModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
