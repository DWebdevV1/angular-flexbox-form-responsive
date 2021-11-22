import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createUserForm();
  }

  ngOnInit(): void {}

  private createUserForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', []],
      lastName: ['', []],
      username: ['', []],
      email: ['', []],
      country: ['', []],
      city: ['', []],
      zip: ['', []],
      street: ['', []]
    });
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
