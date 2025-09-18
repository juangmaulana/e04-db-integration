import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Like } from './entities/like.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
  ) {}

  async create(createLikeDto: CreateLikeDto): Promise<Like> {
    // TODO: Implement like creation
  }

  async findAll(): Promise<Like[]> {
    // TODO: Implement find all likes
  }

  async findOne(id: number): Promise<Like> {
    // TODO: Implement find like by id
  }

  async update(id: number, updateLikeDto: UpdateLikeDto): Promise<Like> {
    // TODO: Implement like update
  }

  async remove(id: number): Promise<void> {
    // TODO: Implement like removal
  }
}
