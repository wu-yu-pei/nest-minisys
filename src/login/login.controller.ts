import { Body, Controller, Post } from '@nestjs/common';
import LoginService from './login.service';

import handlePassword from 'src/commen/utils/handle-password';

import { MyUnauthorizedException } from '../commen/exception/myunaothorized.exception';

@Controller('login')
class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  async login(@Body() data) {
    // eslint-disable-next-line prefer-const
    let { name, password } = data;

    password = handlePassword.encryption(password);

    const res = await this.loginService.login(name, password);

    if (res.length === 1) {
      return {
        message: '登录成功',
        data: res[0],
      };
    } else {
      // 使用自定义异常过滤器
      throw new MyUnauthorizedException();
    }
  }
}
export default LoginController;
