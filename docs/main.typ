#set enum(numbering: "a)")

= Dokumentasi PBKK E04

#v(0.3cm)

Nama: Juang Maulana Taruna Putra

NRP: 5025231257

#v(0.5cm)

== TypeORM

=== 1. Inisialisasi Entities 
Terdapat 3 entities yang perlu dibentuk yaitu Like, Post, dan Users

#line(length: 100%)

==== Users
```ts
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
```
+ id: primary key yang merupakan pembeda 1 user dengan user lain dan auto increment.
+ nama: berupa string untuk menyimpan nama.
+ email: berupa string dan harus berbeda untuk tiap id.

Relasinya adalah one to many ke post karena 1 user bisa membuat banyak post dan one to many ke likes karena 1 user bisa memiliki banyak like.

#line(length: 100%)

=== Posts
```ts
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
```
+ id: primary key yang merupakan pembeda 1 post dengan post lain dan auto increment.
+ content: berupa string untuk menyimpan nama content atau isi content.
+ authorId: berupa number untuk menyimpan pembuat post tersebut dan harus merupakan user.

Relasinya adalah many to one dengan user karena banyak post bisa dimiliki 1 user dan one to many ke like karena 1 post bisa memiliki banyak like.

#line(length: 100%)

=== Likes
```ts
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
```

+ id: primary key yang merupakan pembeda 1 like dengan like lain dan auto increment.
+ userId: berupa number yang menandakan like tersebut berasal dari user mana.
+ postId: berupa number yang menandakan ia like pada post apa.

Relasinya adalah many to one dengan user karena banyak like bisa dimiliki 1 user dan many to many dengan post karena banyak like bisa tersedia dalam 1 post.

=== 2. Inisialisasi DTO
Pada setiap DTO, create dan update menggunakan DTO yang sama dan UpdateDTO hanya partial extend dari create.

a. User
```ts
export class CreateUserDto {
  // TODO: Implement user DTO with validation decorators
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
```
Name tidak boleh kosong dan harus string, email harus berupa format email dengan library bawaan IsEmail dan tidak boleh kosong.

#line(length: 100%)

b. Post
```ts
export class CreatePostDto {
  // TODO: Implement post DTO with validation decorators
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsInt()
  authorId: number;
}
```
Title harus string dan tidak boleh kosong, content juga harus string dan tidak boleh kosong., authorId juga harus berupa integer dan tidak boleh kosong.

#line(length: 100%)

c. Like
```ts
export class CreateLikeDto {
  // TODO: Implement like DTO with validation decorators
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  postId: number;
}
```
UserId harus berupa integer dan tidak boleh kosong, PostId juga harus integer dan tidak boleh kosong.


=== 3. Inisialisasi Services

Service yang akan diterapkan sama saja untuk post, like, dan user hanya berbeda variabel saja.

a. Create
```ts
  async create(createUserDto: CreateUserDto): Promise<User> {
    // TODO: Implement user creation
    const userData = this.userRepository.create(createUserDto);
    return this.userRepository.save(userData);
  }
```

Define sebuah variabel untuk menyimpan data yang diterima sehingga sesuai dengan DTO. Lalu save data tersebut.

#line(length: 100%)

b. Read
```ts
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
```
Untuk findAll hanya gunakan fungsi find. Untuk find dengan id hanya tambahkan parameter where: {id} dan tambahkan catch exception jika user tidak ditemukan dan return hasil user yang ingin dicari.

#line(length: 100%)

c. Update
```ts
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    // TODO: Implement user update
    const currentUser = await this.userRepository.findOne({ where: { id } });
    if (!currentUser) {
      throw new Error('User not found');
    }
    const userData = this.userRepository.merge(currentUser, updateUserDto);
    return await this.userRepository.save(userData);
  }
```

Pertama, cari user yang ingin diupdate dan define ke sebuah variabel. Lalu, tambahkan catch exception jika user tidak ditemukan. Selanjutnya, hanya perlu update saja dengan fungsi merge user sekarang dengan input yang didapat dari DTO dan save.

#line(length: 100%)

d. Delete
```ts
  async remove(id: number): Promise<void> {
    // TODO: Implement user removal
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    await this.userRepository.remove(user);
  }
}
```

Pertama, cari user yang ingin dihapus lalu define ke sebuah variabel. Lalu, tambahkan catch exception jika user yang dicari tidak ada. Selanjutnya, hapus dengan fungsi remove.

Untuk Posts dan Likes juga serupa hanya mengganti nama variabel saja.

== Prisma

=== 1. Inisialisasi Database

a. User
```schema
model User {
  // TODO: Implement
  id        Int      @id @default(autoincrement())
  name      String   
  email     String   @unique

  // relation
  posts     Post[]
  likes     Like[]

  @@map("users")
}
```
+ id : id berupa integer primary key dan auto increment.
+ name : nama berupa String.
+ email : email berupa String yang harus berbeda tiap user.

Relationnya adalah terhadap posts dan likes.

#line(length: 100%)

b. 
```schema
model Post {
  // TODO: Implement
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  authorId  Int  

  //relation
  author    User     @relation(fields: [authorId], references: [id])
  likes     Like[]

  @@map("posts")
}
```
+ id : id berupa integer primary key dan auto increment.
+ title : title berupa String.
+ content : content berupa String.
+ authorId : id dari user yang merupakan penulis post tersebut.

Relationnya adalah terhadap user dan likes, authorId harus merupakan user Id yang valid.

#line(length: 100%)

c. Likes
```schema
model Like {
  // TODO: Implement
  id        Int      @id @default(autoincrement())
  userId    Int      
  postId    Int

  //relation
  user      User     @relation(fields: [userId], references: [id])
  post      Post     @relation(fields: [postId], references: [id])

  @@map("likes")
}
```
+ id : id berupa integer primary key dan auto increment.
+ userId : berupa rujukan user mana yang melakukan like.
+ postId : berupa rujukan post mana like tersebut dilakukan.

Relationnya adalah terhadap user dan post, userId dan postId harus merupakan id yang valid dan dapat ditemukan di tabel user dan post.

=== 2. Inisialisasi DTO

DTO yang digunakan TypeORM dan Prisma sama saja sehingga mekanisme dan logika yang digunakan di TypeORM digunakan kembali di Prisma.


=== 3. Inisialisasi Services

Sama seperti TypeORM, service antara likes, posts, dan users sama saja namun menggunakan nama variabel yang berbeda dan menyesuaikan konteksnya.

a. Create
```ts
  async create(createPostDto: CreatePostDto) {
    // TODO: Implement post creation with Prisma
    return await this.prisma.post.create({
      data: {
        title: createPostDto.title,
        content: createPostDto.content,
        authorId: createPostDto.authorId,
      },
      include: {
        author: true,
      },
    });
  }
```
Create dengan prima menggunakan fungsi create dari prisma dimana data yang akan di post berupa inisialisasi data yang didapat dari DTO dan include relasi yang ada untuk mengecek apakah authorid termasuk di user atau tidak

#line(length: 100%)

b. Read
```ts
  async findAll() {
    // TODO: Implement find all posts with Prisma
    return await this.prisma.post.findMany({
      include: {
        author: true,
      },
    });
  }

  async findOne(id: number) {
    // TODO: Implement find post by id with Prisma
    return await this.prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
  }
```

Untuk read semua, maka hanya menggunakan fungsi findMany dari prisma. Lalu, untuk mencari hanya 1 post berdasarkan idnya, gunakan findUnique dengan where: {id}.

#line(length: 100%)

c. Update
```ts
  async update(id: number, updatePostDto: UpdatePostDto) {
    // TODO: Implement post update with Prisma
    return await this.prisma.post.update({
      where: { id },
      data: {
        title: updatePostDto.title,
        content: updatePostDto.content,
        authorId: updatePostDto.authorId,
      },
      include: {
        author: true,
      },
    });
  }
```
Dengan fungsi update, sama seperti create, cari user yang ingin diupdate dengan where: {id}, lalu masukkan data sesuai DTO.

#line(length: 100%)

d. Delete
```ts
  async remove(id: number) {
    // TODO: Implement post removal with Prisma
    return await this.prisma.post.delete({
      where: { id },
    });
  }
}
```
Dengan fungsi delete, cari user yang ingin dihapus dengan where: {id} dan hapus user.

#v(0.5cm)

== Perbandingan TypeORM vs Prisma
Menurut saya, TypeORM lebih unggul dibandingkan Prisma dari segi kesederhanaan dan fleksibilitas. Hal ini karena TypeORM memungkinkan penggunaan DTO secara langsung untuk operasi data, berbeda dengan Prisma yang memerlukan deklarasi data secara eksplisit. Proses penyiapannya pun lebih praktis: TypeORM hanya butuh definisi entity yang langsung berfungsi sebagai tabel, sedangkan Prisma memerlukan langkah-langkah tambahan seperti pembuatan skema, proses generate, dan migrate. Selain itu, pengalaman pengembangan dengan Prisma terkadang terganggu oleh masalah caching pada VSCode yang dapat memunculkan error palsu, meskipun kode sudah benar.