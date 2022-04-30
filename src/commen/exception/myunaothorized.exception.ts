import { UnauthorizedException, HttpStatus } from '@nestjs/common';
// 自定义异常过滤器
export class MyUnauthorizedException extends UnauthorizedException {
  constructor() {
    super(
      {
        error: '密码错误',
        statusCode: HttpStatus.UNAUTHORIZED,
      },
      HttpStatus.UNAUTHORIZED as any,
    );
  }
}
