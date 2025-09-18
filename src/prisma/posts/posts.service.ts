import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    // TODO: Implement post creation with Prisma
  }

  async findAll() {
    // TODO: Implement find all posts with Prisma
  }

  async findOne(id: number) {
    // TODO: Implement find post by id with Prisma
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    // TODO: Implement post update with Prisma
  }

  async remove(id: number) {
    // TODO: Implement post removal with Prisma
  }
}
