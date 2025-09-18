import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // TODO: Implement user creation
  }

  async findAll(): Promise<User[]> {
    // TODO: Implement find all users
  }

  async findOne(id: number): Promise<User> {
    // TODO: Implement find user by id
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    // TODO: Implement user update
  }

  async remove(id: number): Promise<void> {
    // TODO: Implement user removal
  }
}
