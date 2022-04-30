import { Module } from '@nestjs/common';
import LoginController from './login.controller';
import LoginService from './login.service';

import { UserModule } from 'src/commen/module/user/user.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([]), UserModule],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
