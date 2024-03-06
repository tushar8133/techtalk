import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-bbbb',
  templateUrl: './bbbb.component.html',
  styleUrls: ['./bbbb.component.css'],
})
export class BBBBComponent implements OnInit {
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
