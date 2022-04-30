import { Body, Controller, Post } from '@nestjs/common';
import LoginService from './login.service';

import handlePassword from 'src/commen/utils/handle-password';

@Controller('login')
class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  async login(@Body() data) {
    // eslint-disable-next-line prefer-const
    let { name, password } = data;
    console.log(name, password);

    password = handlePassword.encryption(password);

    const res = await this.loginService.login(name, password);

    if (res.length === 1) {
      return {
        message: '登录成功',
        data: res[0],
      };
    } else {
      return {
        message: '密码错误',
      };
    }
  }
}
export default LoginController;
