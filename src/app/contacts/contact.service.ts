import {Contact} from './contact.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WinRefService} from '../win-ref.service';
import {Subject} from 'rxjs';
import {error} from 'util';

@Injectable({providedIn: 'root'})
export class ContactService {
  contacts: Contact[] = [];
  contactListChangedEvent = new Subject<Contact[]>();
  maxContactId: number;

  constructor(private http: HttpClient) {

  }

  getContacts() {
    this.http.get('https://wdd430-48bb9.firebaseio.com/contacts.json')
      .subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;

          this.maxContactId = this.getMaxId();

          this.contacts.sort((a, b) =>
            (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

          this.contactListChangedEvent.next(this.contacts.slice());
        },

        (error: any) => {
          console.log(error());
        }
      );
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

  storeContacts() {
    const contacts = JSON.stringify(this.contacts);

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.put('https://wdd430-48bb9.firebaseio.com/contacts.json', contacts, {headers: headers})
      .subscribe(
        () => {
          this.contactListChangedEvent.next(this.contacts.slice());
        }
      );
  }

  addContact(newContact: Contact) {
    if (!newContact) {
      return;
    }

    this.maxContactId++;

    newContact.id = this.maxContactId.toString();

    this.contacts.push(newContact);

    this.storeContacts();


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

    this.storeContacts();

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

    this.storeContacts();

  }
}
