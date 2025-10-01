import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    // TODO: Implement user creation with Prisma
    const user = await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
      },
      include: {
        posts: true,
        likes: true,
      }
    });
    return user;  
  }

  async findAll() {
    // TODO: Implement find all users with Prisma
    return await this.prisma.user.findMany({
      include: {
        posts: true,
        likes: true,
      }
    });
  }

  async findOne(id: number) {
    // TODO: Implement find user by id with Prisma
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        posts: true,
        likes: true,
      }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // TODO: Implement user update with Prisma
    return await this.prisma.user.update({
      where: { id },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
      },
      include: {
        posts: true,
        likes: true,
      }
    });
  }

  async remove(id: number) {
    // TODO: Implement user removal with Prisma
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
