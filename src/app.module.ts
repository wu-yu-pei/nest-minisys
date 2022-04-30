import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './commen/middleware/logger.middleware';

import { TypeOrmModule } from '@nestjs/typeorm';

import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [TypeOrmModule.forRoot(), LoginModule, RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  // 绑定中间间
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
