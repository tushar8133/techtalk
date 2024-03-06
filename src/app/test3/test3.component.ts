import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component implements OnInit {

  userId;
  title;
  completed;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.todos().subscribe((data:any) => {
      const item = data[0];
      console.log(item)
      this.userId = item.userId;
      this.title = item.title;
      this.completed = item.completed;
    });
  }

}
