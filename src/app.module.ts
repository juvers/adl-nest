import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DevModule } from './dev/dev.module';
import { DevService } from './dev/dev.service';
import { Dev } from './dev/dev.entity';
import { DevRepository } from './dev/dev.repo';
import { DevController } from './dev/dev.controller';
import { RequestLoggerMiddleware } from './request-logger.middleware';
@Module({
  imports: [
    DevModule,
    TypeOrmModule.forFeature([Dev, DevRepository]),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [DevController],
  providers: [DevService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}
