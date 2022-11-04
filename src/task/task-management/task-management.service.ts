import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITask } from '../task.model';
import { Task, TaskDocument } from '../task.schema';

@Injectable()
export class TaskManagementService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(createTaskDto: ITask): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async update(id: string, taskDto: ITask): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, taskDto).exec();
  }

  async delete(id: string): Promise<Task> {
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
