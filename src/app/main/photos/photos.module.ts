import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhotosRoutingModule} from './photos-routing.module';
import {PhotosHomeComponent} from './photos-home/photos-home.component';
import {PhotosDetailComponent} from './photos-detail/photos-detail.component';
import {PhotosCardComponent} from './photos-card/photos-card.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {NgxScrollTopModule} from 'ngx-scrolltop';


@NgModule({
  declarations: [
    PhotosHomeComponent,
    PhotosDetailComponent,
    PhotosCardComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    MDBBootstrapModule.forRoot(),
    InfiniteScrollModule,
    NgxScrollTopModule
  ]
})
export class PhotosModule {
}
