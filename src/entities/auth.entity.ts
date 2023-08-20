import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'authEntity' })
export default class AuthEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column({ name: 'username', type: 'varchar', length: 24, unique: true })
  username!: string;

  @Column({ name: 'nickname', type: 'varchar', length: 8 })
  nickname!: string;

  @Column({ name: 'password', type: 'text' })
  password!: string;

  @Column({ name: 'salt', type: 'varchar', length: 32 })
  salt!: string;
}
