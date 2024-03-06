import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';


@Component({
  selector: 'app-aaaa',
  templateUrl: './aaaa.component.html',
  styleUrls: ['./aaaa.component.css'],
  providers: [AppService]
  // changeDetection: ChangeDetectionStrategy.Default
})
export class AAAAComponent implements OnInit {
  imagePath = environment.imagesDomain;

  constructor(private router: Router, private cd: ChangeDetectorRef, private appService: AppService) {
  }

  ngOnInit() {
    this.appService.launches().subscribe((data) => {
      console.log(data);
    })
  }


  continue() {
    this.router.navigateByUrl('BBBB');
  }
}
