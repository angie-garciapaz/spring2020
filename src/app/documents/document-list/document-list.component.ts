import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Document} from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document('1', 'CIT 260 - Object Oriented Programming',
      ' A fun class to take!',
      ' www.logo.com', '1'),
    new Document('2', 'CIT 366 - Full Web Stack Development',
      ' Make sure to take take this class with Brother Thayne!',
      ' www.logo.com', '2'),
    new Document('3', 'CIT 425 - Data Warehousing',
      ' This is great class to learn how to learn about data warehousing',
      ' www.logo.com', '3'),
    new Document('4', 'CIT 460 - Enterprise Development',
      ' Fun class to take!',
      ' www.logo.com', '4'),
    new Document('5', 'CIT 495 - Senior Practicum',
      ' This class is necessary to graduate',
      ' www.logo.com', '5')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

}
