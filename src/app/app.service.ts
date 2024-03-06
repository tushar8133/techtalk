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

  hitLaunches() {
    this.counterPlus();
    const resp = request(environment.graphqlDomain, this.queryLaunches);
    return from(resp).pipe(tap(() => this.counterMinus()));
  }

  posts() {
    this.counterPlus();
    return this.httpClient.get(`${environment.apiDomain}/posts`).pipe(tap(() => this.counterMinus()));
  }

  

}
