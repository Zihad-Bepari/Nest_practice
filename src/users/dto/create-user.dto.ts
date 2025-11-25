import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty({ message: 'email can not be empty.' })
  @IsEmail({}, { message: 'please provide a valid email' })
  email: string;

  @IsEnum(['INTERN', 'ADMIN', 'ENGINEER'], {
    message: 'Valid role required',
  })
  role: 'INTERN' | 'ADMIN' | 'ENGINEER';
}
