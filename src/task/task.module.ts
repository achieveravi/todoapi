import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { TaskManagementService } from './task-management/task-management.service';
import { TaskController } from './task.controller';
import { Task, TaskSchema } from './task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    AuthModule,
    UsersModule,
  ],
  controllers: [TaskController],
  providers: [TaskManagementService],
})
export class TaskModule {}
