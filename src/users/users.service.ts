import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpadateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'zihad Bepari',
      email: 'zihad@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'zihad Bepari',
      email: 'zihad@gmail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'zihad Bepari',
      email: 'zihad@gmail.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'zihad Bepari',
      email: 'zihad@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'zihad Bepari',
      email: 'zihad@gmail.com',
      role: 'ENGINEER',
    },
  ];

  findall(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      const roleArry = this.users.filter((user) => user.role === role);
      if (roleArry.length === 0)
        throw new NotFoundException('user Role Not Found');
      return roleArry;
    }
    return this.users;
  }

  findone(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User Not Found');
    return user;
  }

  create(createuser: CreateUserDto) {
    const userbyhightid = [...this.users].sort((a, b) => b.id - a.id);

    const newuser = {
      id: userbyhightid[0].id + 1,
      ...createuser,
    };
    this.users.push(newuser);
    return newuser;
  }

  updateuser(id: number, updateduser: UpadateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateduser };
      }
      return user;
    });
    return this.findone(id);
  }

  delete(id: number) {
    const removeduser = this.findone(id);
    this.users = this.users.filter((user) => user.id !== id);

    return removeduser;
  }
}
