import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}
  create(createTodoDto: CreateTodoDto) {
    return this.todoRepository.save(createTodoDto);
  }

  findAll() {
    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findBy({
      id:id
  });
  }

  update(id: number, updateTodoDto: any) {
    return this.todoRepository.save({
      id:id,
      title:updateTodoDto.title,
      username:updateTodoDto.username,
      status:updateTodoDto.status,
    });
  }

  remove(id: number) {
    return this.todoRepository.remove({
      id:id,
      title:updateTodoDto.title,
      username:updateTodoDto.username,
      status:updateTodoDto.status,
  });
}
