import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WidgetService } from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  // properties
  widgetId: String;
  widget: {};
  widgetType: String;
  pageId: String;
  size: Number;
  text: String;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.widgetId = params['widgetId'];
        this.pageId = params['pageId'];
      }
    );

    this.widget = this.widgetService.findWidgetById(this.widgetId);
    if (this.pageId !== this.widget['pageId']) {
      alert('Page Id does not match!');
    }
    this.widgetType = this.widget['widgetType'];
    this.size = this.widget['size'];
    this.text = this.widget['text'];
  }

}
