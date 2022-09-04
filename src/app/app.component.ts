import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tt-app';

  constructor(private titleService:Title,private router:Router,private activePage:ActivatedRoute){}

  ngOnInit(): void {
    // this.titleService.setTitle('new title')
    this.checkTitle();
  }

  checkTitle(){
    this.router.events.subscribe(event => {
      switch(true){
        case event instanceof NavigationEnd:

          let child = this.activePage.firstChild;
          while(child?.firstChild){
            child = child.firstChild
          }
          
          this.titleService.setTitle(this.activePage.firstChild?.snapshot.data['title'])
          break;
        default:
          break;
      }
    })
  }

}
