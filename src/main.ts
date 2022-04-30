import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cors } from './commen/middleware/cors.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 设置全局路由前缀
  app.setGlobalPrefix('/api/v1');
  // 跨域中间件
  app.use(cors);

  await app.listen(3000);
}
bootstrap();
