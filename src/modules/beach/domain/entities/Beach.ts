export class Beach {
  constructor(
    readonly name: string,
    readonly position: string,
    readonly lat: number,
    readonly lng: number,
    readonly rating: number,
    readonly favorite?: boolean,
  ) {}
}
