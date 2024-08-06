// dev.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dev } from './dev.entity';
import { DevRepository } from './dev.repo';
@Module({
  imports: [TypeOrmModule.forFeature([Dev, DevRepository])],
  exports: [TypeOrmModule],
})
export class DevModule {}
