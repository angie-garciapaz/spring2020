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
  @ViewChild('f', {static: false}) deForm: NgForm;
  id: string;
  editMode = false;
  contact: Contact;
  originalContact: Contact;

  constructor(private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

  }

  onRemoveItem() {
  }

  onCancel() {
    this.router.navigate(['/contact'], {relativeTo: this.route});

  }
}
