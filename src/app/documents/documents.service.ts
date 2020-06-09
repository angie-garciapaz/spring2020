import {Document} from './document.model';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DocumentsService {
  documents: Document[];
  documentSelectedEvent = new EventEmitter();

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    this.documents.forEach(
      document => {
        if (document.id === id) {
          return document;
        }
      }
    );
    return null;
  }
}
