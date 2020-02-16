import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UserNameValidator } from './username.validation';


@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent {
form = new FormGroup({
  userName: new FormControl('',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
        UserNameValidator.cannotContainSpace,
        UserNameValidator.shouldbeUnique
      ] ),
  password: new FormControl('', Validators.required)
});

save() {
  this.form.setErrors({errors: 'invalide error'});
}
  constructor() { }

  get username() {
    return this.form.get('userName');
  }

  get password() {
    return this.form.get('password');
  }

}
