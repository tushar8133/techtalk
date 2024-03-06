import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { request, gql } from 'graphql-request';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dddd',
  templateUrl: './dddd.component.html',
  styleUrls: ['./dddd.component.css'],
})
export class DDDDComponent implements OnInit {
  constructor(private router: Router, private appService: AppService) {}

  ngOnInit() {
    this.appService.hitLaunches().subscribe((data) => {
      console.log(data);
    });
    // request(
    //   'https://main--spacex-l4uc6p.apollographos.net/graphql',
    //   this.queryLanches
    // ).then((data) => console.log(data));
    // request(
    //   'https://main--spacex-l4uc6p.apollographos.net/graphql',
    //   this.queryShips
    // ).then((data) => console.log(data));
    // request(
    //   'https://main--spacex-l4uc6p.apollographos.net/graphql',
    //   this.queryDragons
    // ).then((data) => console.log(data));
  }

  continue() {
    this.router.navigateByUrl('AAAA');
  }
}