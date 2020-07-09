import {Component, Input, OnInit} from '@angular/core';
import {Document} from './document.model';
import {DocumentsService} from './documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  @Input() selectedDocument: Document[];

  constructor(private documentService: DocumentsService) {
  }

  ngOnInit() {
    this.documentService.documentListChangedEvent.subscribe(
      (document: Document[]) => {
        this.selectedDocument = document;
      }
    );
  }
}
