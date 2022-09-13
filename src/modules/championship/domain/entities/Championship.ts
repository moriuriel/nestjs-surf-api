export enum ChampionshipStatusEnum {
  'OPEN' = 'OPEN',
  'FINISH' = 'FINISH',
}

export class Championship {
  constructor(
    public name: string,
    public event_date: Date,
    public beach_id: string,
    public status?: ChampionshipStatusEnum,
  ) {
    this.setDefaultStatus();
  }

  setDefaultStatus() {
    this.status = ChampionshipStatusEnum.OPEN;
  }
}
