import { SuccessReponseBuilder } from './SuccessResponse.builder';

export class SuccessResponse<DataType, MetaDataType> {
  data: DataType;
  timestamp: string;
  statusCode: number;
  metaData: MetaDataType;

  constructor(
    successReponseBuilder: SuccessReponseBuilder<DataType, MetaDataType>,
  ) {
    this.timestamp = successReponseBuilder.getTimestamp();
    this.statusCode = successReponseBuilder.getStatusCode();
    this.metaData = successReponseBuilder.getMetaData();
    this.data = successReponseBuilder.getData();
  }
}
