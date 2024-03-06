import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { request, gql } from 'graphql-request';
import { AppService } from '../app.service';
import { forkJoin, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  flag = false;

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
      switchMap(() => this.appService.users()),
      switchMap(() => this.appService.todos()),
    ).subscribe((data) => {
      // console.log(data);
      this.flag = data[0].completed;
    })
  }

  continue() {
    this.router.navigateByUrl('test2');
  }
}
