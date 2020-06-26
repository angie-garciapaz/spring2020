import {Contact} from './contact.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';
import {EventEmitter, Injectable} from '@angular/core';
import {WinRefService} from '../win-ref.service';

@Injectable({providedIn: 'root'})
export class ContactService {
  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent = new EventEmitter<Contact[]>();

  constructor(private winRefService: WinRefService) {
    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    // this.contacts.forEach(
    //   contact => {
    //     if (contact.id === id) {
    //       return contact;
    //     }
    //   }
    // );
    // return null;
    for (const contact of this.contacts) {
      if (contact.id === id) {
        return contact;
      }
    }
    return null;
  }

  deleteContact(contact: Contact) {
    if (contact === null) {
      return;
    }

    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }

    this.contacts.splice(pos, 1);
    this.contactChangedEvent.emit(this.contacts.slice());
  }

}
