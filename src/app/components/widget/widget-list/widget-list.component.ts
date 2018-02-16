import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WidgetService } from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  pageId: String;
  widgets: any = [];

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.pageId = params['pageId'];
      }
    );

    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
  }

}
