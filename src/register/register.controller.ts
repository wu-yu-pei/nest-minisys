import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

import handlePassword from 'src/commen/utils/handle-password';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  async register(@Body() data) {
    // eslint-disable-next-line prefer-const
    let { name, password } = data;
    const res = await this.registerService.finOne(name);

    if (res.length === 0) {
      password = handlePassword.encryption(password);
      return this.registerService.register(name, password);
    }

    return {
      messag: '用户名已存在',
    };
  }
}
