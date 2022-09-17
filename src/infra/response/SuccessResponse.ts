import { SuccessReponseBuilder } from './SuccessResponse.builder';

export class SuccessResponse<DataType> {
  data: DataType;
  timestamp: string;
  statusCode: number;

  constructor(successReponseBuilder: SuccessReponseBuilder<DataType>) {
    this.data = successReponseBuilder.getData();
    this.timestamp = successReponseBuilder.getTimestamp();
    this.statusCode = successReponseBuilder.getStatusCode();
  }
}
