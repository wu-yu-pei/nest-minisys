import { Injectable } from '@nestjs/common';
import { UserService } from 'src/commen/module/user/user.service';

@Injectable()
export class RegisterService {
  constructor(private readonly userService: UserService) {}

  async register(name, password) {
    return await this.userService.createUser(name, password);
  }

  async finOne(name) {
    return await this.userService.findOne(name);
  }
}
