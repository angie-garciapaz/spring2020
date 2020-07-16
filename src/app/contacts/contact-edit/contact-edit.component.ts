import {Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  // @ViewChild('f', {static: false}) deForm: NgForm;
  id: string;
  editMode = false;
  hasGroup = false;
  groupContacts: Contact[] = [];
  contact: Contact;
  originalContact: Contact;

  constructor(private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;

        if (!this.id) {
          this.editMode = false;
          return;
        }

        this.originalContact = this.contactService.getContact(this.id);


        if (!this.originalContact) {
          return;

        }

        this.editMode = true;
        this.contact = JSON.parse(JSON.stringify(this.originalContact));

        if (
          this.originalContact.group &&
          this.originalContact.group.length > 0
        ) {
          this.groupContacts = JSON.parse(JSON.stringify(this.originalContact.group));
        }

      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    const newContact = new Contact('',
      value.name, value.email, value.phone, value.imageUrl, this.groupContacts);


    if (this.editMode === true) {
      this.contactService.updateContact(this.originalContact, newContact);
    } else {
      this.contactService.addContact(newContact);
    }

    this.router.navigate(['/contacts']);

  }

  // onRemoveItem() {
  // }
  //
  // onCancel() {
  //   this.router.navigate(['/contact'], {relativeTo: this.route});
  //
  // }


  isInvalidContact(newContact: Contact) {
    if (!newContact) {
      return true;
    }

    if (this.contact && newContact.id === this.contact.id) {
      return true;
    }

    for (let i = 0; i < this.groupContacts.length; i++) {
      if (newContact.id === this.groupContacts[i].id) {
        return true;
      }
    }

    return false;
  }

  addToGroup($event: any) {
    const selectedContact: Contact = $event.dragData;
    const invalidGroupContact = this.isInvalidContact(selectedContact);
    // console.log('hey 1');

    if (invalidGroupContact) {
      // console.log('invalid');
      return;

    }
    this.groupContacts.push(selectedContact);
    // console.log('pushed');

    // this.invalidGroupContact = false;
  }

  onRemoveItem(idx: number) {
    if (idx < 0 || idx >= this.groupContacts.length) {
      return;
    }

    this.groupContacts.splice(idx, 1);
    // this.invalidGroupContact = false;
  }
}
