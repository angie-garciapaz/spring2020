import {Document} from './document.model';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';
import {Injectable} from '@angular/core';
import {WinRefService} from '../win-ref.service';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Contact} from '../contacts/contact.model';

@Injectable({providedIn: 'root'})
export class DocumentsService {
  documents: Document[] = [];
  documentListChangedEvent = new Subject<Document[]>();
  maxDocumentId: number;

  constructor(private http: HttpClient) {

  }

  getDocuments() {
    this.http.get('https://wdd430-48bb9.firebaseio.com/documents.json')
      .subscribe(
        (documents: Document[]) => {
          this.documents = documents;

          this.maxDocumentId = this.getMaxId();

          this.documents.sort((a, b) =>
            (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

          this.documentListChangedEvent.next(this.documents.slice());
        },

        (error: any) => {
          console.log(error());
        }
      );
  }

  storeDocuments() {
    const documents = JSON.stringify(this.documents);

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.put('https://wdd430-48bb9.firebaseio.com/documents.json', documents, {headers: headers})
      .subscribe(
        () => {
          this.documentListChangedEvent.next(this.documents.slice());
        }
      );
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

    this.storeDocuments();
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
    this.storeDocuments();
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
    this.storeDocuments();
  }
}
