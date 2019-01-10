import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { Paths } from './paths';
import { SignInGuard } from './sign-in.guard';

const routes: Routes = [
  { path: Paths.WELCOME_SYMBOL, component: WelcomeComponent },
  {
    path: Paths.SIGN_IN_SYMBOL,
    component: SignInComponent,
    canActivate: [SignInGuard]
  },
  {
    path: Paths.REGISTER_SYMBOL,
    component: RegisterComponent,
    canActivate: [SignInGuard]
  },
  { path: Paths.EMPTY_SYMBOL, redirectTo: Paths.WELCOME_PATH, pathMatch: 'full' },
  { path: Paths.WILDCARD_SYMBOL, redirectTo: Paths.WELCOME_PATH }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
