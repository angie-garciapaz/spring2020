import {Component, OnInit} from '@angular/core';
import {Document} from '../document.model';
import {FormsModule, NgForm} from '@angular/forms';
import {DocumentsService} from '../documents.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  id: string;
  editMode = false;
  document: Document;
  originalDocument: Document;

  constructor(private documentService: DocumentsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;

        if (!params.id) {
          this.editMode = false;
          return;
        }

        this.originalDocument = this.documentService.getDocument(this.id);

        if (!this.originalDocument) {
          return;
        }

        this.editMode = true;
        this.document = JSON.parse(JSON.stringify(this.originalDocument));
      }
    );
  }

  onSubmit(form: NgForm) {
    console.log('submitted!');
  }

}
