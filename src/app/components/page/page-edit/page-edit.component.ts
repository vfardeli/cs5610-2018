import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageService } from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  // properties
  pageId: String;
  page: {};
  name: String;
  websiteId: String;
  description: String;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => { 
        this.pageId = params['pageId'];
        this.websiteId = params['websiteId'];
      }
    );

    this.page = this.pageService.findPageById(this.pageId);
    if (this.websiteId !== this.page['websiteId']) {
      alert ('Website Id does not match!');
    }
    this.name = this.page['name'];
    this.description = this.page['description'];
  }

}
