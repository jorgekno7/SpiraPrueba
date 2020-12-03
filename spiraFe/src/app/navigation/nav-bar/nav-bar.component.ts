import { Component, OnInit } from '@angular/core';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  activeIndex = 0
  isAdmin;
  constructor(private autenticationService: AutenticationService) { }

  ngOnInit(): void {
    this.isAdmin = this.autenticationService.isAdmin();
  }
  
  activeTab(i) {
    this.activeIndex = i
  }
  
  out() {
    this.autenticationService.SignOut();
  }


}
