import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

// tslint:disable-next-line:no-input-rename
@Input('isFavorite') isFavorite: boolean;

// tslint:disable-next-line:no-output-native
@Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({favorite: this.isFavorite, title: 'Title', name: 'Agaba'});
  }
}

export interface FavoriteEventArgs {
  favorite: boolean;
  title: string;
  name: string;
}
