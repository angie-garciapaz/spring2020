import {Routes, RouterModule} from '@angular/router';
import {DocumentsComponent} from './documents/documents.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NgModule} from '@angular/core';
import {MessageListComponent} from './messages/message-list/message-list.component';
import {DocumentEditComponent} from './documents/document-edit/document-edit.component';
import {DocumentDetailComponent} from './documents/document-detail/document-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/documents', pathMatch: 'full'},
  {
    path: 'documents',
    component: DocumentsComponent,
    children: [
      {path: 'new', component: DocumentEditComponent},
      {path: ':id', component: DocumentDetailComponent},
      {path: ':id/edit', component: DocumentEditComponent}
    ]
  },
  {path: 'message-list', component: MessageListComponent},
  {
    path: 'contacts', component: ContactsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
