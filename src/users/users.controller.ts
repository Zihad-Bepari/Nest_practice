import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';

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
  findOne(@Param('id') id: string) {
    return this.userservice.findone(+id);
  }

  @Post()
  create(
    @Body()
    User: {
      name: string;
      email: string;
      role: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    return this.userservice.create(User);
  }
  @Patch(':id')
  UpdateUser(
    @Param('id') id: string,
    @Body()
    userupdate: {
      name: string;
      email: string;
      role: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    return this.userservice.updateuser(+id, userupdate);
  }

  @Delete(':id') // Get/users/:id
  delete(@Param('id') id: string) {
    return this.userservice.delete(+id);
  }
}
