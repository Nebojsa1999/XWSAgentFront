import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-page',
  templateUrl: './owner-page.component.html',
  styleUrls: ['./owner-page.component.scss']
})
export class OwnerPageComponent implements OnInit {
user:any;
  constructor(    private router: Router,
    ) { }

  ngOnInit(): void {
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

}
