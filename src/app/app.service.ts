import { Injectable } from '@angular/core';
import { request, gql } from 'graphql-request';
import { BehaviorSubject, Subject, from, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class AppService {

  loader$ = new BehaviorSubject(false);
  counter$ = new BehaviorSubject(0);
  counter = 0;


  queryDragons = gql`
    query Dragons {
      dragons {
        name
        first_flight
        diameter {
          feet
        }
        launch_payload_mass {
          lb
        }
      }
    }
  `;

  queryShips = gql`
  query Ships {
    ships {
      model
      name
      type
      status
    }
  }
  `;

  queryLaunches = gql`
  query Launches {
    launches {
      id
      details
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
  `;

  constructor(
    private httpClient: HttpClient
  ) {
    this.counter$.subscribe((data) => {

      if (data > 0) {
        this.loader$.next(true);
      } else {
        this.loader$.next(false);
      }
    })
  }

  counterPlus() {
    this.counter$.next(++this.counter);
  }
  
  counterMinus() {
    this.counter$.next(--this.counter);
  }

  launches() {
    this.counterPlus();
    const resp = request(environment.graphqlDomain, this.queryLaunches);
    return from(resp).pipe(tap(() => this.counterMinus()));
  }

  ships() {
    this.counterPlus();
    const resp = request(environment.graphqlDomain, this.queryShips);
    return from(resp).pipe(tap(() => this.counterMinus()));
  }

  dragons() {
    this.counterPlus();
    const resp = request(environment.graphqlDomain, this.queryDragons);
    return from(resp).pipe(tap(() => this.counterMinus()));
  }

  posts() {
    this.counterPlus();
    return this.httpClient.get(`${environment.apiDomain}/posts`).pipe(tap(() => this.counterMinus()));
  }

  comments() {
    this.counterPlus();
    return this.httpClient.get(`${environment.apiDomain}/comments`).pipe(tap(() => this.counterMinus()));
  }

  albums() {
    this.counterPlus();
    return this.httpClient.get(`${environment.apiDomain}/albums`).pipe(tap(() => this.counterMinus()));
  }

  photos() {
    this.counterPlus();
    return this.httpClient.get(`${environment.apiDomain}/photos`).pipe(tap(() => this.counterMinus()));
  }

  todos() {
    this.counterPlus();
    return this.httpClient.get(`${environment.apiDomain}/todos`).pipe(tap(() => this.counterMinus()));
  }

  users() {
    this.counterPlus();
    return this.httpClient.get(`${environment.apiDomain}/users`).pipe(tap(() => this.counterMinus()));
  }

  images() {
    const imgs = [
      "photo-1709707057514-94130a765d96",
      "photo-1709628794129-688d8e0024d1",
      "photo-1582446372478-c834552d5f7e",
      "photo-1562873658-15d15ab42c13",
      "photo-1551299329-f819836c4554",
      "photo-1640537072339-a5a28201bcd8",
      "photo-1486134030336-39b1094bf33e",
      "photo-1534271057238-c2c170a76672",
      "photo-1583339522870-0d9f28cef33f",
      "photo-1554668048-5055c5654bbc",
      "photo-1613327986042-63d4425a1a5d",
      "photo-1709487825067-572381924db5",
      "photo-1697455620889-88b0e6d1de33",
      "photo-1709389227723-7acbe00ce6e4",
      "photo-1709431511239-e238335fa6ca",
      "photo-1709403336612-2e257601f5d7",
      "photo-1702591539493-e8baaab87f66",
    ];
    return imgs.map((item) => `${environment.imagesDomain}/${item}`);
  }


}
