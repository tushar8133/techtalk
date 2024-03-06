import { Injectable } from '@angular/core';
import { request, gql } from 'graphql-request';
import { from, of } from 'rxjs';

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

  constructor() {}

  hitLaunches() {
    const resp = request(
      'https://main--spacex-l4uc6p.apollographos.net/graphql',
      this.queryLaunches
    );
    return from(resp);
  }
}
