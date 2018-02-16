import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WebsiteService } from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  
  // properties
  websiteId: String;
  website: {};
  name: String;
  developerId: String;
  description: String;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['websiteId'];
        this.developerId = params['developerId'];
      }
    );

    this.website = this.websiteService.findWebsiteById(this.websiteId);
    this.name = this.website['name'];
    if (this.developerId !== this.website['developerId']) {
      alert('Developer Id did not match!');
    }
    this.description = this.website['description'];
  }

}
