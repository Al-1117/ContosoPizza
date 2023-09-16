import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaFormComponent } from './pizza-list/pizza-form/pizza-form.component';

const routes: Routes = [
  {path: 'home', component: ContentComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'pizza-list', component: PizzaListComponent},
  {path: 'pizza-form', component: PizzaFormComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
