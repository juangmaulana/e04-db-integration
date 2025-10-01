import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    // TODO: Implement post creation with Prisma
    return await this.prisma.post.create({
      data: {
        title: createPostDto.title,
        content: createPostDto.content,
        authorId: createPostDto.authorId,
      },
      include: {
        author: true,
      },
    });
  }

  async findAll() {
    // TODO: Implement find all posts with Prisma
    return await this.prisma.post.findMany({
      include: {
        author: true,
      },
    });
  }

  async findOne(id: number) {
    // TODO: Implement find post by id with Prisma
    return await this.prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    // TODO: Implement post update with Prisma
    return await this.prisma.post.update({
      where: { id },
      data: {
        title: updatePostDto.title,
        content: updatePostDto.content,
        authorId: updatePostDto.authorId,
      },
      include: {
        author: true,
      },
    });
  }

  async remove(id: number) {
    // TODO: Implement post removal with Prisma
    return await this.prisma.post.delete({
      where: { id },
    });
  }
}
