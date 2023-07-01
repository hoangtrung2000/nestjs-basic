import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // @Get()
  // getAllTasks(@Query() filterDto: GetTaskFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.taskService.getTaskWithFilters(filterDto);
  //   }
  //   return this.taskService.getAllTasks();
  // }

  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.taskService.createTask(createTaskDto);
  // }

  // @Patch('/:id/status')
  // updateStatusById(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidationPip) status: TaskStatus,
  // ) {
  //   return this.taskService.updateStatus(id, status);
  // }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string) {
  //   return this.taskService.deleteTaskById(id);
  // }
}
