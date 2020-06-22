import {Document} from './document.model';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';
import {EventEmitter, Injectable} from '@angular/core';
import {WinRefService} from '../win-ref.service';

@Injectable({providedIn: 'root'})
export class DocumentsService {
  documents: Document[];
  documentSelectedEvent = new EventEmitter();

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
}
