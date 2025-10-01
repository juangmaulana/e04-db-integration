import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';

@Entity('likes')
export class Like {
  // TODO: Implement like entity fields and relationships
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  postId: number;

  //relations
  @ManyToOne((type) => User, (user) => user.likes)
  user: User;

  @ManyToOne((type) => Post, (post) => post.likes)
  post: Post;
}
