import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-job-offer',
  templateUrl: './create-job-offer.component.html',
  styleUrls: ['./create-job-offer.component.scss']
})
export class CreateJobOfferComponent implements OnInit {

  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  public errorMessage : any; 
  business: any;
  user:any;
  businessid : any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {

    this.form = this.fb.group({
      description: ['', Validators.required],
      position: ['', Validators.required],
      descriptionActivity: ['', Validators.required],
      precondition: ['', Validators.required]

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
     this.api.getBusinessByUser().subscribe((response : any) => {
      this.business = response;
      this.businessid = this.business.id;

     });
  }

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const description = this.form.get('description')?.value;
        const position = this.form.get('position')?.value;
        const descriptionActivity = this.form.get('descriptionActivity')?.value;
        const precondition = this.form.get('precondition')?.value;

        this.api.addJob({
          Description: description,
          Position: position,
          DescriptionActivity: descriptionActivity,
          Precondition: precondition,
          Business: this.business
         
        }).subscribe((response : any) => {

          this.router.navigate(['/'])
        });


      } catch (err) {
        this.loginInvalid = true;
        
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
