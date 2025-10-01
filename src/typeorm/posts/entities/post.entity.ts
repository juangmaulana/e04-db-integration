import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Like } from '../../likes/entities/like.entity';

@Entity('posts')
export class Post {
  // TODO: Implement post entity fields and relationships
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  authorId: number;

  //relations
  @ManyToOne((type) => User, (user) => user.posts)
  author: User;

  @OneToMany((type) => Like, (like) => like.post)
  likes: Like[];
}
