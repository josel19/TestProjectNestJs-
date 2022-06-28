import { Injectable } from '@nestjs/common';
import { Task } from "./Interfaces/Task";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { createTaskDto } from "./dto/create-task.dto";
@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private taskModel: Model<Task>){}

    async getAllTasks(){
       return await this.taskModel.find();
    }

    async getTaskForId(id: string){
       return await this.taskModel.findById(id);
    }

    async createTask(task: createTaskDto){
      const newTask = new this.taskModel(task);
      return await newTask.save();
      
    }





}
