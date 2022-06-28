import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { createTaskDto } from "./dto/create-task.dto";
import { TaskService } from './task.service';
import { Task } from './Interfaces/Task';

@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService){}

@Get()
getTasks(): Promise<Task[]> {
   return this.taskService.getAllTasks();
}

@Get(":taskId")
getTask(@Param("taskId") taskId: string){
   return this.taskService.getTaskForId(taskId);
}

@Post()
createTask(@Body() task: createTaskDto): Promise<Task>{
 return this.taskService.createTask(task);
}

@Put(":id")
putTask(@Body() task: createTaskDto, @Param("id") id): string{
return 'Actualizando tareas';
}

@Delete(":id")
deleteTask( @Param("id") id): string{
    console.log(id);
return `Eilimnando tarea #${id}`;
}




}
