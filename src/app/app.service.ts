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


}
