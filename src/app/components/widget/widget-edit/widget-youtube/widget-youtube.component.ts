import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WidgetService } from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  // properties
  widgetId: String;
  widget: {};
  widgetType: String;
  pageId: String;
  width: Number;
  url: String;

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
    this.width = this.widget['width'];
    this.url = this.widget['url'];
  }

}
