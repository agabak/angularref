import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [ {id: 1, name: 'email'}, {id:2, name: 'phone'}];
  constructor() { }

  ngOnInit(): void {
  }
  submit(form) {
     console.log(form.value);
  }
}
