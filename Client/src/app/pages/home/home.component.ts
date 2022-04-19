import { Component, OnInit } from '@angular/core';
import { BasepageComponent } from '../../partials/basepage/basepage.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasepageComponent implements OnInit {

  constructor(route:ActivatedRoute) { 
  super(route);
  }
  

  override ngOnInit(): void {
  }

  

}
