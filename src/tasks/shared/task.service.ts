import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import *as bcrypt from 'bcrypt';
import { responseDTO } from './DTO/response.DTO';
import { taskCreateDTO } from './DTO/task.create';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async Create( data: taskCreateDTO): Promise <responseDTO>{
    let task = new Task()
    task.nome = bcrypt.hashSync(data.nome, 8)
   return this.taskRepository.save(task)
    .then((result)=>{
      return <responseDTO>{
        mensagem: 'Shazan'
      }
    })
    .catch((error)=>{
      return <responseDTO>{
        mensagem: "Campo nome obrigatorio"
      }
    })
  }
}
