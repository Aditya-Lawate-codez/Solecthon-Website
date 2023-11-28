import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { 
    var image:string;
    image = ".\assets\images\logo.svg"
  }
  
  ngOnInit(): void {
  

  }

}
