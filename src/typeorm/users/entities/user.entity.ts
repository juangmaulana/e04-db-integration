import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Like } from '../../likes/entities/like.entity';
import { Post } from '../../posts/entities/post.entity';

@Entity('users')
export class User {
  // TODO: Implement user entity fields and relationships
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  // relations
  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];

  @OneToMany((type) => Like, (like) => like.user)
  likes: Like[];
}
