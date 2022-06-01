import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  
  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  public errorMessage : any; 

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {

    this.form = this.fb.group({
      email: ['', Validators.email],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      dateBirth: ['', Validators.required]

    });
  }

  async ngOnInit(): Promise<void> {
  }

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const email = this.form.get('email')?.value;
        const username = this.form.get('username')?.value;
        const name = this.form.get('firstName')?.value;
        const surname = this.form.get('lastName')?.value;
        const password = this.form.get('password')?.value;
        const address = this.form.get('address')?.value;
        const phone = this.form.get('phone')?.value;
        const gender = this.form.get('gender')?.value;
        const dateBirth = this.form.get('dateBirth')?.value;
        console.log(dateBirth)
        this.api.register({
          email: email,
          username: username,
          password: password,
          name: name,
          surname: surname,
          address: address,
          PhoneNumber: phone,
          gender: gender,
          dateOfBirth : dateBirth
        }).subscribe((response : any) => {

          this.router.navigate(['/login'])
        });


      } catch (err) {
        this.loginInvalid = true;
        
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}