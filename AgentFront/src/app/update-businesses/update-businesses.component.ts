import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-businesses',
  templateUrl: './update-businesses.component.html',
  styleUrls: ['./update-businesses.component.scss']
})
export class UpdateBusinessesComponent implements OnInit {

  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  public errorMessage : any;
  user: any;
  business: any;
  id:any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,

  ) {
    
    this.form = this.fb.group({
      name: [''],
      contact: [''],
      jobDescription: [''],
      jobCulture: [''],
      
    });
 
  }
  

  async ngOnInit():  Promise<void>  {
    const userString = localStorage.getItem('user');
        if(userString == null) {
          this.router.navigate(['/login'], {queryParams: { login: 'false' } });
        }
      
        this.user = JSON.parse((userString) || '{}');
        if(this.user.role != 1){    
          this.router.navigate(['/home'], {queryParams: { permission: 'false' } });
    
        }
      this.api.getBusinessByUser().subscribe((response : any) => {
      this.business = response;
      this.id = this.business.id;
      this.form.patchValue({
        name: this.business.name,
        contact: this.business.contact,
        jobDescription: this.business.jobDescription,
        jobCulture: this.business.jobCulture,
      
        
     });
    
  
    })
  
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
    
        this.api.updateCompany({
          name: name,
          contact: contact,
          jobDescription: jobDescription,
          jobCulture: jobCulture,
          owner: this.user,
          id: this.id
          
        }).subscribe((response : any) => {

          this.router.navigate(['/'])
        },(error:any) => {
          this.errorMessage = error.error;
        });


      } catch (err) {
        this.loginInvalid = true;
        
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
