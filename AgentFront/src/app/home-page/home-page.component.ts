import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  infoMessage:string;

  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.infoMessage = '';
    this.route.queryParams
    .subscribe(params => {
      if(params['permission'] !== undefined && params['permission'] === 'false') {
          this.infoMessage = 'U dont have permission!';
      }
    });
    localStorage.removeItem("Token");
    localStorage.removeItem('user');
  }

}
