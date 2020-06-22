import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Document} from '../document.model';
import {WinRefService} from '../../win-ref.service';
import {DocumentsService} from '../documents.service';


@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document: Document;
  nativeWindow: any;
  id: string;

  constructor(private route: ActivatedRoute,
              private windService: WinRefService,
              private router: Router,
              private documentService: DocumentsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.document = this.documentService.getDocument(this.id);
      }
    );
    this.nativeWindow = this.windService.getNativeWindow();
  }

  onView() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

}
