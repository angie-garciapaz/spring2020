import {Contact} from './contact.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';
import {Injectable} from '@angular/core';
import {WinRefService} from '../win-ref.service';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ContactService {
  contacts: Contact[] = [];
  contactListChangedEvent = new Subject<Contact[]>();
  maxContactId: number;

  constructor() {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    for (const contact of this.contacts) {
      if (contact.id === id) {
        return contact;
      }
    }
    return null;
  }


  getMaxId(): number {
    let maxId = 0;

    for (const contact of this.contacts) {
      const currentId = parseInt(contact.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addContact(newContact: Contact) {
    if (!newContact) {
      return;
    }

    this.maxContactId++;

    const contactListClone = this.contacts.slice();

    newContact.id = this.maxContactId.toString();

    this.contacts.push(newContact);


  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (!originalContact || !newContact) {
      return;
    }
    const pos = this.contacts.indexOf(originalContact);

    if (pos < 0) {
      return;
    }

    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;
    const contactListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactListClone);
  }

  deleteContact(contact: Contact) {
    if (!contact) {
      return;
    }

    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }

    this.contacts.splice(pos, 1);
    const contactListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactListClone);
  }
}
