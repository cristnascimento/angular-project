import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';

const routes: Routes = [
  { path: 'contact/add', component: ContactFormComponent },
  { path: 'contact/edit/:id', component: ContactFormComponent },
  { path: 'contact/view/:id', component: ContactFormComponent },
  { path: 'contact/list', component: ContactListComponent },
  { path: 'home', component: ContactHomeComponent },
  { path: '', component: ContactHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
