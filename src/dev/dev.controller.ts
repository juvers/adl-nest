import {
  Body,
  Controller,
  Get,
  Put,
  Delete,
  Post,
  Param,
} from '@nestjs/common';
import { DevService } from './dev.service';
import { DevDto } from './dev.dto';
import { Dev } from './dev.entity';

@Controller('dev')
export class DevController {
  constructor(private readonly devService: DevService) {}

  @Get()
  public getDev() {
    return this.devService.getDev();
  }

  @Post()
  public async postDev(@Body() dev: DevDto) {
    return this.devService.postDev(dev);
  }

  @Get(':id')
  public async getDevByID(@Param('id') id: number) {
    return this.devService.getDevByID(id);
  }

  @Delete(':id')
  public async deleteDevByID(@Param('id') id: number) {
    return this.devService.deleteDevByID(id);
  }
  @Put(':id')
  public async putDevByID(
    @Param('id') id: number,
    @Body() devData: Partial<Dev>,
  ) {
    return this.devService.putDevByID(id, devData);
  }
}
