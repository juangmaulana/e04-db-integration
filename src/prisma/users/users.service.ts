import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    // TODO: Implement user creation with Prisma
  }

  async findAll() {
    // TODO: Implement find all users with Prisma
  }

  async findOne(id: number) {
    // TODO: Implement find user by id with Prisma
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // TODO: Implement user update with Prisma
  }

  async remove(id: number) {
    // TODO: Implement user removal with Prisma
  }
}
