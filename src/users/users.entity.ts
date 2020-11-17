import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({nullable: true})
  name: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, Number(process.env.HASH_SALT));
  }
}