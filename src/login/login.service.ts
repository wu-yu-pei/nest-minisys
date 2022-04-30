import { Injectable } from '@nestjs/common';
import { UserService } from 'src/commen/module/user/user.service';

@Injectable()
class LoginService {
  constructor(private readonly userService: UserService) {}
  async login(name, password) {
    return await this.userService.login(name, password);
  }
}

export default LoginService;
