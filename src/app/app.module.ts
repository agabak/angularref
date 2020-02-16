import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SummaryPipe } from './course-list/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { MappingComponent } from './mapping/mapping.component';
import { InputFormatDirective } from './input-format.directive';
import { LoggingDirective } from './logging.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    SummaryPipe,
    FavoriteComponent,
    MappingComponent,
    InputFormatDirective,
    LoggingDirective,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
