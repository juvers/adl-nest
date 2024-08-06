import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
// import { resolve } from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dev } from './dev.entity';
@Injectable()
export class DevService {
  constructor(
    @InjectRepository(Dev)
    private devRepository: Repository<Dev>,
  ) {}

  //GetDevs
  public async getDev(): Promise<{
    status: number;
    message: string;
    devs: Dev[];
  }> {
    try {
      const devs = await this.devRepository.find();
      if (!devs || devs.length === 0) {
        throw new HttpException('No devs found', HttpStatus.NOT_FOUND);
      }
      return { status: HttpStatus.OK, message: 'success', devs };
    } catch (error) {
      let status = HttpStatus.INTERNAL_SERVER_ERROR;
      let message = 'Internal server error';
      if (error instanceof HttpException) {
        status = error.getStatus();
        const errorMessage = error.getResponse();
        message =
          typeof errorMessage === 'string' ? errorMessage : 'An error occurred';
      }
      return { status, message, devs: [] };
    }
  }

  //CreateDev
  public async postDev(
    devData: Partial<Dev>,
  ): Promise<{ status: number; dev: Dev; message: string }> {
    try {
      // Check if the ID is provided
      if (devData.hasOwnProperty('id') && devData.id !== undefined) {
        // Check if a dev with the same ID already exists
        const existingDev = await this.devRepository.findOne({
          where: { id: devData.id },
        });
        if (existingDev) {
          throw new HttpException(
            'A dev with the provided ID already exists',
            HttpStatus.CONFLICT,
          );
        }
      }

      // Check if all required fields are provided
      const requiredFields = [
        'firstname',
        'lastname',
        'squad',
        'yearofservice',
        'role',
        'experience',
        'salary',
      ];

      /** Non mandatory fields
       * 'preferredlanguage',
        'stacklayer',
        'coreskills',
        'tierlevel',
        'image',
       */
      // throw error if a required field is missing
      for (const field of requiredFields) {
        if (!(field in devData) || !devData[field]) {
          throw new HttpException(
            `Missing required field: ${field}`,
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      // Create and save the new dev
      const newDev = this.devRepository.create(devData);
      const savedDev = await this.devRepository.save(newDev);

      return {
        status: HttpStatus.CREATED,
        message: 'Dev added successfully',
        dev: savedDev,
      };
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //GetDevByID
  public async getDevByID(
    id: number,
  ): Promise<{ status: number; message: string; dev: Dev }> {
    try {
      const dev = await this.devRepository.findOne({ where: { id } });
      if (!dev) {
        throw new NotFoundException(`Dev with ID ${id} not found`);
      }
      return { status: HttpStatus.OK, message: 'success', dev };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //DeleteDev
  public async deleteDevByID(
    id: number,
  ): Promise<{ status: number; message: string }> {
    try {
      const dev = await this.devRepository.findOne({ where: { id } });
      if (!dev) {
        throw new NotFoundException(`Dev with ID ${id} not found`);
      }
      await this.devRepository.remove(dev);
      return {
        status: HttpStatus.OK,
        message: `Dev with ID ${id} deleted successfully`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //UpdateDev
  public async putDevByID(
    id: number,
    devData: Partial<Dev>,
  ): Promise<{ status: number; message: string; updatedDev?: Dev }> {
    try {
      const dev = await this.devRepository.findOne({ where: { id } });
      if (!dev) {
        throw new NotFoundException(`Dev with ID ${id} not found!`);
      }

      // Merge provided data with existing dev properties
      const updatedDevData: Partial<Dev> = { ...dev, ...devData };

      // Save the updated dev entity
      const updatedDev = await this.devRepository.save(updatedDevData);

      return {
        status: HttpStatus.OK,
        message: `Dev with ID ${id} updated successfully`,
        updatedDev,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
