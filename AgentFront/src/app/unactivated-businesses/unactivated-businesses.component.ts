import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-unactivated-businesses',
  templateUrl: './unactivated-businesses.component.html',
  styleUrls: ['./unactivated-businesses.component.scss']
})
export class UnactivatedBusinessesComponent implements OnInit {

  data: any;
  user:any;
  displayedColumns: string[] = ['Business','Description', 'Position', 'DescriptionActivity','Precondition'];
  
  constructor(  private apiService: ApiService , 
    private router: Router) {
      
     } 
 
  ngOnInit(): void {

        const userString = localStorage.getItem('user');
        if(userString == null) {
          this.router.navigate(['/login'], {queryParams: { login: 'false' } });
          return;
        }
      
        this.user = JSON.parse((userString));
        if(this.user.role != 0){    
          this.router.navigate(['/home'], {queryParams: { permission: 'false' } });
          return;
        }

    this.apiService.getUnactivated().subscribe((response : any) => {
      this.data = response;

    });
   
  }

  activateBusiness  (id:any) 
  {
      this.apiService.activateBusiness({
        businessId: id,
        owner: this.data.owner
      }).subscribe((response : any) => {
       
      });
  }

}
