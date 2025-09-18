import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';

@Injectable()
export class LikesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLikeDto: CreateLikeDto) {
    // TODO: Implement like creation with Prisma
  }

  async findAll() {
    // TODO: Implement find all likes with Prisma
  }

  async findOne(id: number) {
    // TODO: Implement find like by id with Prisma
  }

  async update(id: number, updateLikeDto: UpdateLikeDto) {
    // TODO: Implement like update with Prisma
  }

  async remove(id: number) {
    // TODO: Implement like removal with Prisma
  }
}
