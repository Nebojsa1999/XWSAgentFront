import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
data:any;
user:any;
displayedColumns: string[] = ['Business','Description', 'Position', 'DescriptionActivity','Precondition','View'];
  constructor(    
    private api: ApiService,
    private router: Router
        ) { }

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
        if(userString == null) {
          this.router.navigate(['/login'], {queryParams: { login: 'false' } });
          return;
        }
      
        this.user = JSON.parse((userString));
        if(this.user.role != 2){    
          this.router.navigate(['/home'], {queryParams: { permission: 'false' } });
          return;
        }
    this.api.getAllJobs().subscribe((response : any) => {
      this.data = response});
  }


}
