import { Module } from '@nestjs/common';
import { UserModule } from 'src/commen/module/user/user.module';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports: [UserModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
