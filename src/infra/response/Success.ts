import { SuccessReponseBuilder } from './Success.response';

export class Success<DataType> {
  data: DataType;
  timestamp: string;
  statusCode: number;

  constructor(successReponseBuilder: SuccessReponseBuilder<DataType>) {
    this.data = successReponseBuilder.getData();
    this.timestamp = successReponseBuilder.getTimestamp();
    this.statusCode = successReponseBuilder.getStatusCode();
  }
}
