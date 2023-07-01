import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}
  // private tasks: Task[] = [];
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTaskWithFilters(filterDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((item) => item.status === status.toUpperCase());
  //   }
  //   if (search) {
  //     const searchTerm = search.toLocaleLowerCase();
  //     tasks = tasks.filter(
  //       (item) =>
  //         item.title.toLocaleLowerCase().includes(searchTerm) ||
  //         item.description.toLocaleLowerCase().includes(searchTerm),
  //     );
  //   }
  //   return tasks;
  // }
  async getTaskById(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) throw new NotFoundException(`Task with ID ${id} not found.`);
    return task;
  }
  // deleteTaskById(id: string) {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((item) => item.id !== found.id);
  //   return {
  //     message: 'done',
  //   };
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: randomUUID(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // updateStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
