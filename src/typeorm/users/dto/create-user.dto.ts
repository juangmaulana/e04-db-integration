import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  // TODO: Implement user DTO with validation decorators
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
