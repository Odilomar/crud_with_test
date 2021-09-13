import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  private constructor({ name, email }: User) {
    return Object.assign(this, { name, email });
  }

  static create({
    name,
    email,
    createdAt = new Date(),
    updatedAt = new Date(),
  }: User) {
    return new User({ name, email, createdAt, updatedAt });
  }
}
