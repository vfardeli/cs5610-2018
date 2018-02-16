import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// import { Widget } from '../models/widget.model.client';

@Injectable()
export class WidgetService {

    constructor() { }

    widgets = [
        { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO" },
        { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
        { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "http://lorempixel.com/400/200/" },
        { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>" },
        { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
        { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
        { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>" }
    ];

    api = {
        'createWidget': this.createWidget,
        'findWidgetsByPageId': this.findWidgetsByPageId,
        'findWidgetById': this.findWidgetById,
        'updateWidget': this.updateWidget,
        'deleteWidget': this.deleteWidget
    };

    createWidget(pageId: String, widget: any) {
        widget._id = Math.random();
        widget.pageId = pageId;
        this.widgets.push(widget);
    }

    findWidgetsByPageId(pageId: String) {
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                return this.widgets[x];
            }
        }
    }

    findWidgetById(widgetId: String) {
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
    }

    updateWidget(widgetId: String, widget: any) {
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId && this.widgets[x].widgetType === widget.widgetType) {
                widget.widgetId = widgetId;
                this.widgets[x] = widget;
                // switch (widget.widgetType) {
                //     case 'HEADER':
                //         this.widgets[x].text = widget.text;
                //         this.widgets[x].size = widget.size;
                //         return true;

                //     case 'IMAGE':
                //         this.widgets[x].text = widget.text;
                //         this.widgets[x].url = widget.url;
                //         this.widgets[x].width = widget.width;
                //         return true;

                //     case 'YOUTUBE':
                //         this.widgets[x].text = widget.text;
                //         this.widgets[x].url = widget.url;
                //         this.widgets[x].width = widget.width;
                //         return true;
                // }
            }
        }
    }

        deleteWidget(widgetId: String) {
            for (let x = 0; x < this.widgets.length; x++) {
                if (this.widgets[x]._id === widgetId) {
                    this.widgets.splice(x, 1);
                }
            }
        }
    }
