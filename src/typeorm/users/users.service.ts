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
    const userData = this.userRepository.create(createUserDto);
    return this.userRepository.save(userData);
  }

  async findAll(): Promise<User[]> {
    // TODO: Implement find all users
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    // TODO: Implement find user by id
    const user = await this.userRepository.findOne({ where: { id } }); 
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    // TODO: Implement user update
    const currentUser = await this.userRepository.findOne({ where: { id } });
    if (!currentUser) {
      throw new Error('User not found');
    }
    const userData = this.userRepository.merge(currentUser, updateUserDto);
    return await this.userRepository.save(userData);
  }

  async remove(id: number): Promise<void> {
    // TODO: Implement user removal
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    await this.userRepository.remove(user);
  }
}
