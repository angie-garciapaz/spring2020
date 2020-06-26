import {Document} from './document.model';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';
import {EventEmitter, Injectable} from '@angular/core';
import {WinRefService} from '../win-ref.service';

@Injectable({providedIn: 'root'})
export class DocumentsService {
  documents: Document[];
  documentSelectedEvent = new EventEmitter();
  documentChangedEvent = new EventEmitter<Document[]>();

  constructor(private winRefService: WinRefService) {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    for (const document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }
    return null;
  }

  deleteDocument(document: Document) {
    if (document === null) {
      return;
    }

    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }

    this.documents.splice(pos, 1);
    this.documentChangedEvent.emit(this.documents.slice());
  }

}
