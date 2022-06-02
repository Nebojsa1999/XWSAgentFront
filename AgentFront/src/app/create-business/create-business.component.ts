import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.scss']
})
export class CreateBusinessComponent implements OnInit {
  user:any
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
      name: ['', Validators.required],
      contact: ['', Validators.required],
      jobDescription: ['', Validators.required],
      jobCulture: ['', Validators.required]

    });
  }

  async ngOnInit(): Promise<void> {
    const userString = localStorage.getItem('user');
        if(userString == null) {
          this.router.navigate(['/login'], {queryParams: { login: 'false' } });
          return;
        }
      
        this.user = JSON.parse((userString));
        if(this.user.role != 2)
        {
          this.router.navigate(['/home'], {queryParams: { permission: 'false' } });
          return;
        }
  }

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const name = this.form.get('name')?.value;
        const contact = this.form.get('contact')?.value;
        const jobDescription = this.form.get('jobDescription')?.value;
        const jobCulture = this.form.get('jobCulture')?.value;
  
        this.api.createBusiness({
          Name: name,
          Contact: contact,
          JobDescription: jobDescription,
          JobCulture: jobCulture,
          Owner: this.user 
        }).subscribe((response : any) => {

        });


      } catch (err) {
        this.loginInvalid = true;
        
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}


