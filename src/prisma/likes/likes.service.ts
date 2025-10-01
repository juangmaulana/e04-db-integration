import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';

@Injectable()
export class LikesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLikeDto: CreateLikeDto) {
    // TODO: Implement like creation with Prisma
    const like = await this.prisma.like.create({
      data: {
        userId: createLikeDto.userId,
        postId: createLikeDto.postId,
      },
      include: {
        user: true,
        post: true,
      },
    });
    return like;
  }

  async findAll() {
    return await this.prisma.like.findMany({
      include: {
        user: true,
        post: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.like.findUnique({
      where: { id },
      include: {
        user: true,
        post: true,
      },
    });
  }

  async update(id: number, updateLikeDto: UpdateLikeDto) {
    return await this.prisma.like.update({
      where: { id },
      data: {
        userId: updateLikeDto.userId,
        postId: updateLikeDto.postId,
      },
      include: {
        user: true,
        post: true,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.like.delete({
      where: { id },
    });
  }
}
