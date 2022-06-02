import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-owner-page',
  templateUrl: './owner-page.component.html',
  styleUrls: ['./owner-page.component.scss']
})
export class OwnerPageComponent implements OnInit {
user:any;
jobs:any;
apikey:any;
displayedColumns: string[] = ['Business', 'Description', 'Position','DescriptionActivity','Precondition'];
  constructor(    private router: Router,    private apiService: ApiService

    ) { }

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if(!userString)
    {
      this.router.navigate(['/login'], {queryParams: { login: 'false' } });
      return;
    }
    this.user = JSON.parse((userString));
    
  
     if(this.user.role != 1)
    {
      this.router.navigate(['/home'], {queryParams: { permission: 'false' } });
      return;
    }

    this.apiService.getJobsByUserId(
      {
        id : this.user.id
      }
    ).subscribe((response : any) => {
       this.jobs = response;
       console.log(this.jobs)

  });

  this.apiService.getApiKeyByUserId(
    {
      id: this.user.id
    }
  ).subscribe((response : any) => {
    this.apikey = response;
    console.log(this.apikey.apiKeyString)


});
}
}
