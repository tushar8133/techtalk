import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { request, gql } from 'graphql-request';
import { AppService } from '../app.service';
import { forkJoin, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss'],
})
export class Page4Component implements OnInit {
  imagePath = environment.imagesDomain;

  constructor(private router: Router, private appService: AppService) {}

  ngOnInit() {
    this.hitAllApis();
  }

  hitAllApis() {
    this.appService.launches().pipe(
      switchMap(() => this.appService.ships()),
      switchMap(() => this.appService.dragons()),
      switchMap(() => this.appService.posts()),
      switchMap(() => this.appService.comments()),
      switchMap(() => this.appService.albums()),
      switchMap(() => this.appService.photos()),
      switchMap(() => this.appService.todos()),
      switchMap(() => this.appService.users()),
    ).subscribe((data) => {
      // console.log(data);
    })
  }

  continue() {
    this.router.navigateByUrl('AAAA');
  }
}
