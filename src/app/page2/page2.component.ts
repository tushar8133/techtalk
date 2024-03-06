import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component implements OnInit {
  imagePath = environment.imagesDomain;

  constructor(private appService: AppService) {}

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
}
