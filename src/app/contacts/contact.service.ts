import {Contact} from './contact.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';
import {EventEmitter, Injectable} from '@angular/core';
import { WinRefService} from '../win-ref.service';

@Injectable({providedIn: 'root'})
export class ContactService {
  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>();

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

}
