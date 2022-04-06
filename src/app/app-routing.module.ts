import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path : 'display', component : DisplayComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'search', component : SearchComponent},
  {path : 'delete', component : DeleteComponent},
  {path : 'menu', component : MenuComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
