import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskManagementService } from './task-management/task-management.service';
import { ITask } from './task.model';

@Controller('tasks')
export class TaskController {
  private tasks: ITask[] = [{ title: 'New Task', completed: false }];

  constructor(private readonly taskManagementService: TaskManagementService) {}

  @Get()
  async tasksList() {
    return await this.taskManagementService.findAll();
  }

  @Post()
  async create(@Body() task: ITask) {
    return await this.taskManagementService.create(task);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() task: ITask) {
    return await this.taskManagementService.update(id, task);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.taskManagementService.delete(id);
  }
}
