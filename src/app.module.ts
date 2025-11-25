import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { config } from 'dotenv';

import { EmployeesModule } from './employees/employees.module';
import { DatabaseModule } from './database/database.module';

config();
@Module({
  imports: [UsersModule, EmployeesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
