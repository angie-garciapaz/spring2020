import {Document} from './document.model';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';
import {Injectable} from '@angular/core';
import {WinRefService} from '../win-ref.service';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DocumentsService {
  documents: Document[];
  documentListChangedEvent = new Subject<Document[]>();
  maxDocumentId: number;

  constructor(private winRefService: WinRefService) {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
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

  // deleteDocument(document: Document) {
  //   if (document === null) {
  //     return;
  //   }
  //
  //   const pos = this.documents.indexOf(document);
  //   if (pos < 0) {
  //     return;
  //   }
  //
  //   this.documents.splice(pos, 1);
  //   this.documentListChangedEvent.next(this.documents.slice());
  // }

  getMaxId(): number {
    let maxId = 0;

    for (const document of this.documents) {
      const currentid = parseInt(document.id);

      if (currentid > maxId) {
        maxId = currentid;
      }
    }
    return maxId;

  }

  addDocument(newDocument: Document) {
    if (!newDocument) {
      return;
    }

    this.maxDocumentId++;

    newDocument.id = this.maxDocumentId.toString();

    this.documents.push(newDocument);

    const documentListClone = this.documents.slice();

    this.documentListChangedEvent.next(documentListClone);
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument) {
      return;
    }

    const pos = this.documents.indexOf(originalDocument);

    if (pos < 0) {
      return;
    }

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    const documentListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentListClone);
  }

  deleteDocument(document: Document) {
    if (!document) {
      return;
    }

    const pos = this.documents.indexOf(document);

    if (pos < 0) {
      return;
    }

    this.documents.splice(pos, 1);
    const documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }
}
