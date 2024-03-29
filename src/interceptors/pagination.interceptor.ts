// pagination.interceptor.ts

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginationService } from '../shared/services/pagination.service';

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
  constructor(private readonly paginationService: PaginationService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      map((data) => {
        if (request.query.page && Array.isArray(data)) {
          const page = parseInt(request.query.page, 10) || 1;
          const itemsPerPage = parseInt(request.query.limit, 10) || 10;

          return this.paginationService.paginate(data, page, itemsPerPage);
        }

        return data;
      })
    );
  }
}
