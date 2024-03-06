import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {


  display$ = this.appService.loader$;

  constructor(private appService: AppService) { }

  ngOnInit(): void {

  }

}
