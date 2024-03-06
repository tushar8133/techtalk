import { Injectable } from '@angular/core';
import { request, gql } from 'graphql-request';
import { from, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class AppService {
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
  ) {}

  hitLaunches() {
    const resp = request(environment.graphqlDomain, this.queryLaunches);
    return from(resp);
  }

  posts() {
    return this.httpClient.get(`${environment.apiDomain}/posts`);
  }
}
