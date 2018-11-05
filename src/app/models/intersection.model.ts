
interface LatLong {
  lat: string;
  lng: string;
}

export interface IntersectionResponse {
  intersection: string;
}

export class StreetsToIntersectModel {
  constructor(
    public street1: string,
    public street2: string
  ) { }

}

export class IntersectionPoint {
  constructor(
    public response: IntersectionResponse
  ) { }

  getLatLong(): LatLong {
    let lat: string;
    let lng: string;
    [lng, lat] = this.response
      .intersection
      .replace('POINT(', '')
      .replace(')', '')
      .split(' ');

    return <LatLong>{ lat, lng };
  }
}
