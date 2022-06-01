import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-save-api',
  templateUrl: './save-api.component.html',
  styleUrls: ['./save-api.component.scss']
})
export class SaveApiComponent implements OnInit {

  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  public errorMessage : any; 
  business: any;
  user:any;
  businessid : any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService
  ) {

    this.form = this.fb.group({
      apiKeyString: ['', Validators.required]

    });
  }

  async ngOnInit(): Promise<void> {
    const userString = localStorage.getItem('user');
    if(userString == null) {
      this.router.navigate(['/login'], {queryParams: { login: 'false' } });
    }
  
    this.user = JSON.parse((userString) || '{}');
    if(this.user.role != 1)
    {
      this.router.navigate(['/home'], {queryParams: { permission: 'false' } });

    } 
  }

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const apiKeyString = this.form.get('apiKeyString')?.value;
        

        this.api.saveApiKey({
          apiKeyString: apiKeyString,
          Owner : this.user
         
        }).subscribe((response : any) => {

        })


      } catch (err) {
        this.loginInvalid = true;
        
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
