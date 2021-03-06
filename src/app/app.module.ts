import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuillEditorModule } from 'ngx-quill-editor';
// import { TestService } from './services/tes.service.client';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { UserService } from '../app/services/user.service.client';
import { WebsiteService } from '../app/services/website.service.client';
import { PageService } from '../app/services/page.service.client';
import { WidgetService } from '../app/services/widget.service.client';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { Routing } from './app.routing';
import { SortableDirective } from './sortable.directive';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import { FlickrService } from '../app/services/flickr.service.client';
import { OrderByPipe } from './components/widget/widget-list/order-by-pipe.pipe';
import { SharedService } from './services/shared.service';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteListComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    PageListComponent,
    PageNewComponent,
    PageEditComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetListComponent,
    SortableDirective,
    WidgetHtmlComponent,
    WidgetTextComponent,
    OrderByPipe,
    FlickrImageSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    QuillEditorModule
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService, FlickrService, AuthGuard, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
