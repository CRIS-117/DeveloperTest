import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { BalanceComponent } from './components/balance/balance.component';
import { EditComponent } from './components/edit/edit.component';
import { Routes,RouterModule } from '@angular/router';
import { SingupComponent } from './components/singup/singup.component';

const appRoutes:Routes=[
  {path:'usuario',component:UserComponent},
  {path:'balance',component:BalanceComponent},
  {path:'edit',component:EditComponent},
  {path:'singup',component:SingupComponent},
  {path:'',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    BalanceComponent,
    EditComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const routingComponent = [UserComponent,LoginComponent,BalanceComponent,EditComponent,SingupComponent];
