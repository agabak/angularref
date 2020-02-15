import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SummaryPipe } from './course-list/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { MappingComponent } from './mapping/mapping.component';
import { InputFormatDirective } from './input-format.directive';
import { LoggingDirective } from './logging.directive';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    SummaryPipe,
    FavoriteComponent,
    MappingComponent,
    InputFormatDirective,
    LoggingDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
