import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public allData:any = [];
  constructor(private route: Router) {
  }

  Logout(){
    this.route.navigate(['/tab1'])
  }


    
}
