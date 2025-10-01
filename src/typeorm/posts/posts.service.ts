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
    const postData = this.postRepository.create(createPostDto);
    return this.postRepository.save(postData);
  }

  async findAll(): Promise<Post[]> {
    // TODO: Implement find all posts
    return await this.postRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    // TODO: Implement find post by id
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    // TODO: Implement post update
    const currentPost = await this.postRepository.findOne({ where: { id } });
    if (!currentPost) {
      throw new Error('Post not found');
    }
    const postData = this.postRepository.merge(currentPost, updatePostDto);
    return await this.postRepository.save(postData);
  }

  async remove(id: number): Promise<void> {
    // TODO: Implement post removal
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) {
      throw new Error('Post not found');
    }
    await this.postRepository.remove(post);
  }
}
