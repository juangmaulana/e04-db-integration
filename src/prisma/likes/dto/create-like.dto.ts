import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateLikeDto {
  // TODO: Implement like DTO with validation decorators
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  postId: number;
}
