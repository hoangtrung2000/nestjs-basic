import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPip implements PipeTransform {
  readonly allowedStatus = [
    TaskStatus.OPEN,
    TaskStatus.PROCESSING,
    TaskStatus.COMPLETE,
  ];
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value))
      throw new BadRequestException(`"${value}" is an invalid status.`);
    return value;
  }
  private isStatusValid(status: any) {
    const index = this.allowedStatus.indexOf(status);
    return index !== -1;
  }
}
