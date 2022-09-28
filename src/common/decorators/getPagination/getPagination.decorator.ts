import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export interface IPagination {
  page: number;
  limit: number;
  total?: number;
  totalPages?: number;
}

export const GetPagination = createParamDecorator(
  (_, context: ExecutionContext): IPagination => {
    const request: Request = context.switchToHttp().getRequest();

    const pagination: IPagination = {
      page: request.query.page ? parseInt(request.query.page.toString()) : 1,
      limit: request.query.limit
        ? parseInt(request.query.limit.toString())
        : 20,
    };

    return pagination;
  },
);
