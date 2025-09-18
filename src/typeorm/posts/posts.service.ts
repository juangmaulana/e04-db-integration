import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    // TODO: Implement post creation
  }

  async findAll(): Promise<Post[]> {
    // TODO: Implement find all posts
  }

  async findOne(id: number): Promise<Post> {
    // TODO: Implement find post by id
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    // TODO: Implement post update
  }

  async remove(id: number): Promise<void> {
    // TODO: Implement post removal
  }
}
