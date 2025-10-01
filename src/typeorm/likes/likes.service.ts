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
    const likesData = this.likeRepository.create(createLikeDto);
    return this.likeRepository.save(likesData);
  }

  async findAll(): Promise<Like[]> {
    // TODO: Implement find all likes
    return await this.likeRepository.find();
  }

  async findOne(id: number): Promise<Like> {
    // TODO: Implement find like by id
    const like = await this.likeRepository.findOne({ where: { id } });
    if (!like) {
      throw new Error('Like not found');
    }
    return like;
  }

  async update(id: number, updateLikeDto: UpdateLikeDto): Promise<Like> {
    // TODO: Implement like update
    const currentLike = await this.likeRepository.findOne({ where: { id } });
    if (!currentLike) {
      throw new Error('Like not found');
    }
    const likeData = this.likeRepository.merge(currentLike, updateLikeDto);
    return await this.likeRepository.save(likeData);
  }

  async remove(id: number): Promise<void> {
    // TODO: Implement like removal
    const like = await this.likeRepository.findOne({ where: { id } });
    if (!like) {
      throw new Error('Like not found');
    }
    await this.likeRepository.remove(like);
  }
}
