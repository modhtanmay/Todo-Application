import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ListtodosComponent } from './components/listtodos/listtodos.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TodoComponent } from './components/todo/todo.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService] },
    { path: 'todos', component: ListtodosComponent, canActivate: [RouteGuardService] },
    { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
    { path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService] },
    { path: '', component: LoginComponent },
    { path: '**', component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
