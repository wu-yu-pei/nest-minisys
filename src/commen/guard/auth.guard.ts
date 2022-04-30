import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import jwt from '../utils/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;

    if (!authorization) return false;
    const token = authorization.replace('Bearer ', '');

    const res = jwt.verify(token);
    if (res) return true;
    return false;
  }
}
