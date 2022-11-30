import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TaskManagementService } from './task-management/task-management.service';
import { ITask } from './task.model';

@UseGuards(JwtAuthGuard)
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
