import { EntityRepository, Repository } from 'typeorm';
import { Dev } from './dev.entity';

@EntityRepository(Dev)
export class DevRepository extends Repository<Dev> {
  // Add custom methods here if needed
}
