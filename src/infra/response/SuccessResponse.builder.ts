import { SuccessResponse } from './SuccessResponse';

export class SuccessReponseBuilder<DataType> {
  private data: DataType;
  private timestamp: string;
  private statusCode: number;

  constructor() {
    this.timestamp = new Date(Date.now()).toISOString();
  }

  setData(data: DataType) {
    this.data = data;
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

  build() {
    return new SuccessResponse<DataType>(this);
  }
}
