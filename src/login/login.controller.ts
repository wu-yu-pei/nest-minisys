import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import LoginService from './login.service';

import handlePassword from 'src/commen/utils/handle-password';
import Jwt from 'src/commen/utils/jwt';

import { MyUnauthorizedException } from '../commen/exception/myunaothorized.exception';
import { HttpExceptionFilter } from '../commen/exception/exception-filter';

@Controller('login')
@UseFilters(new HttpExceptionFilter())
class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  async login(@Body() data) {
    // eslint-disable-next-line prefer-const
    let { name, password } = data;

    password = handlePassword.encryption(password);

    const res = await this.loginService.login(name, password);

    if (res.length === 1) {
      const { name, password } = res[0];
      const token = Jwt.sign({ name, password });

      return {
        message: '登录成功',
        data: {
          token,
        },
      };
    } else {
      // 使用自定义异常过滤器
      throw new MyUnauthorizedException();
    }
  }
}
export default LoginController;
