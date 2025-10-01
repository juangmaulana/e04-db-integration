import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreatePostDto {
  // TODO: Implement post DTO with validation decorators
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsInt()
  authorId: number;
}
