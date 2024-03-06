import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-cccc',
  templateUrl: './cccc.component.html',
  styleUrls: ['./cccc.component.css'],
})
export class CCCCComponent implements OnInit {
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
      console.log(data);
    })
  }
}
