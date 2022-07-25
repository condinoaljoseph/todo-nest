import { Controller, Get, Param } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  @Get()
  findAll(): string {
    return 'Todos';
  }

  @Get(':id')
  findOne(@Param() params): string {
    return params.id;
  }
}
