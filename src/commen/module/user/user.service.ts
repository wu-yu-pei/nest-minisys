import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  // 创建用户
  async createUser(name, password) {
    const res = await this.usersRepository.save({
      name,
      password,
    });
    return res;
  }
  // 查找一个用户
  async findOne(name) {
    const res = await this.usersRepository.find({
      where: {
        name,
      },
    });
    return res;
  }

  // login
  async login(name, password) {
    const res = await this.usersRepository.find({
      where: {
        name,
        password,
      },
    });
    return res;
  }
}
