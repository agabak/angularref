import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { FavoriteEventArgs } from '../favorite/favorite.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
Courses: Course[];
post = {
  title: 'title',
  isFavorite: true
};
// tslint:disable-next-line:max-line-length
title = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getAllCourses();
    console.log(this.Courses);
  }

   getAllCourses() {
       this.Courses = this.courseService.getAllCourses();
   }

   onFavoriteChange(eventArg: FavoriteEventArgs) {
     console.log('Hello there where change', eventArg);
   }
  }


interface Course {
  id: number;
  name: string;
}
