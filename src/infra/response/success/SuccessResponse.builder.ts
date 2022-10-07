import { SuccessResponse } from './SuccessResponse';

export class SuccessReponseBuilder<DataType, MetaDataType> {
  private data: DataType;
  private timestamp: string;
  private statusCode: number;
  private metaData?: MetaDataType;

  constructor() {
    this.timestamp = new Date(Date.now()).toISOString();
  }

  setData(data: DataType) {
    this.data = data;
    return this;
  }

  setMetaData(metaData: MetaDataType) {
    this.metaData = metaData;
    return this;
  }

  setStatusCode(statusCode) {
    this.statusCode = statusCode;

    return this;
  }

  getData() {
    return this.data;
  }

  getStatusCode() {
    return this.statusCode;
  }

  getTimestamp() {
    return this.timestamp;
  }

  getMetaData() {
    return this.metaData;
  }

  build() {
    return new SuccessResponse<DataType, MetaDataType>(this);
  }
}
