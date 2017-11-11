import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent }      from './chat/chat.component';
import { AulaVirtualComponent } from './aula-virtual/aula-virtual.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'chat', component: ChatComponent },
  { path: 'aula-virtual', component: AulaVirtualComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
