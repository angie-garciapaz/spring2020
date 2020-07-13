import {Component, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('f', {static: false}) deForm: NgForm;
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
    const values = form.value;

    // const newDocument = new Document();
    //
    // newDocument = this.document.name;
    //
    //   this.document.name = this.if(this.editMode === true);
    //   {
    //     this.documentService.updateDocument(this.originalDocument, newDocument);
    //   }
    // else
    //   {
    //     this.documentService.addDocument(newDocument);
    //   }
    //
    //   this.router.navigate(['documents'], {relativeTo: this.route});
    // }

  }

  onCancel() {
    this.router.navigate(['document'], {relativeTo: this.route});
  }
}
