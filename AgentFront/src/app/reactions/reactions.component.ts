import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss']
})
export class ReactionsComponent implements OnInit {
jobId : any;
data: any;
user:any;

displayedColumns: string[] = ['User','Business','Comment', 'Wage', 'InterViewImpression','Grade'];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public api: ApiService
    ) { }

  ngOnInit(): void {
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

    const jobIdString = this.route.snapshot.queryParamMap.get('id');
    this.jobId = parseInt(jobIdString  || '{}');

    this.api.getReactionsByJobId({
      jobId : this.jobId
    }).subscribe((response:any)=>
    {
      this.data = response
    });
  }

}
