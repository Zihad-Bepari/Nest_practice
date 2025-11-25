import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpadateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userservice: UsersService) {}

  @Get() // Get/users
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    return this.userservice.findall(role);
  }

  @Get('interns')
  findallinterns() {
    return [];
  }

  @Get(':id') // Get/users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userservice.findone(id);
  }

  @Post()
  create(
    @Body(ValidationPipe)
    createuser: CreateUserDto,
  ) {
    return this.userservice.create(createuser);
  }
  @Patch(':id')
  UpdateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    userupdate: UpadateUserDto,
  ) {
    return this.userservice.updateuser(id, userupdate);
  }

  @Delete(':id') // Get/users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userservice.delete(id);
  }
}
