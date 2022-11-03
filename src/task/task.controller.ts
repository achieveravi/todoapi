import { Body, Controller, Get, Post } from '@nestjs/common';
import { ITask } from './task.model';

@Controller()
export class TaskController {
  private tasks: ITask[] = [{ title: 'New Task', completed: false }];

  @Get('tasks')
  getTasks() {
    return this.tasks;
  }

  @Post('task')
  addTask(@Body() param: ITask) {
    this.tasks.push(param);
  }
}
