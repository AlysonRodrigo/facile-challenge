import { Body, Controller, Get, Post } from '@nestjs/common';
import { responseDTO } from './DTO/response.DTO';
import { taskCreateDTO } from './DTO/task.create';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('todos')
  async getAll() : Promise<Task[]>{
      return this.taskService.findAll();
  }
  @Post('salvar')
  async create(@Body() data : taskCreateDTO): Promise<responseDTO>{
      return this.taskService.Create(data)
  }

}