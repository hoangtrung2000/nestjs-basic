import { Repository } from 'typeorm';
import { Task } from './task.entity';

export class TaskRepository extends Repository<Task> {
  // Add custom repository methods if needed
}
