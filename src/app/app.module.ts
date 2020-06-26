import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactListComponent} from './contacts/contact-list/contact-list.component';
import {ContactDetailComponent} from './contacts/contact-detail/contact-detail.component';
import {ContactItemComponent} from './contacts/contact-item/contact-item.component';
import {DocumentsComponent} from './documents/documents.component';
import {DocumentListComponent} from './documents/document-list/document-list.component';
import {DocumentItemComponent} from './documents/document-item/document-item.component';
import {DocumentEditComponent} from './documents/document-edit/document-edit.component';
import {DocumentDetailComponent} from './documents/document-detail/document-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {MessageItemComponent} from './messages/message-item/message-item.component';
import {MessageEditComponent} from './messages/message-edit/message-edit.component';
import {MessageListComponent} from './messages/message-list/message-list.component';
import {DropdownDirective} from './dropdown.directive';
import {ContactService} from './contacts/contact.service';
import {AppRoutingModule} from './app-routing';
import {DocumentViewComponent} from './documents/document-view/document-view.component';
import {WinRefService} from './win-ref.service';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactEditComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentEditComponent,
    DocumentDetailComponent,
    MessagesComponent,
    MessageItemComponent,
    MessageEditComponent,
    MessageListComponent,
    DropdownDirective,
    DocumentViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WinRefService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
