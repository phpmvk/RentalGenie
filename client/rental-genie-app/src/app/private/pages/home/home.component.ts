import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    //deprecated by me
    // private service: AuthService,
  ){}

  
}

// DEPRECATED BY ME
// ngOnInit(){ 
  //deprecated by me
  // this.activatedRoute.queryParams.subscribe(params => {
  //   console.log(params)
  //   this.callGoogleBack('hey')
  // })
// }


//deprecated by me
// callGoogleBack(params: any) {
//   return this.service.GoogleCallback(params).subscribe(res => console.log('hi'))
// }