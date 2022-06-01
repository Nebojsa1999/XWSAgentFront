import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-reaction',
  templateUrl: './post-reaction.component.html',
  styleUrls: ['./post-reaction.component.scss']
})
export class PostReactionComponent implements OnInit {

  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  public errorMessage : any; 
  user: any;
  post:any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {

    this.form = this.fb.group({
      comment: ['', Validators.required],
      wage: ['',[Validators.min(20000), Validators.max(1000000)]],
      interviewImpression: ['', Validators.required],
      grade: ['', Validators.required]

    });
  }

  async ngOnInit(): Promise<void> {
    const userString = localStorage.getItem('user');
        if(userString == null) {
          this.router.navigate(['/login'], {queryParams: { login: 'false' } });
        }
      
        this.user = JSON.parse((userString) || '{}');
        if(this.user.role != 2)
        {
          this.router.navigate(['/home'], {queryParams: { permission: 'false' } });

        }
  }

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const comment = this.form.get('comment')?.value;
        const wage = this.form.get('wage')?.value;
        const interviewImpression = this.form.get('interviewImpression')?.value;
        const grade = this.form.get('grade')?.value;

        this.api.addReaction({
          Comment: comment,
          Wage: wage,
          InterviewImpression: interviewImpression,
          Grade: grade,
          User: this.user,
          Post: this.post
         
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
