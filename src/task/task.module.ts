import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskManagementService } from './task-management/task-management.service';
import { TaskController } from './task.controller';
import { Task, TaskSchema } from './task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [TaskManagementService],
})
export class TaskModule {}
