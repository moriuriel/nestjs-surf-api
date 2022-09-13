export class Beach {
  constructor(
    readonly name: string,
    readonly position: string,
    readonly lat: number,
    readonly lng: number,
  ) {}

  getPosition() {
    return {
      lat: this.lat,
      lng: this.lng,
    };
  }
}
