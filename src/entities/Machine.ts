import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Machine extends BaseEntity {
  @PrimaryGeneratedColumn() id: string;

  @Column({ type: 'text', unique: true })
  name: string;

  @Column({ type: 'text', nullable: false })
  type: string;

  @Column({ type: 'text', nullable: false })
  state: string;
}

export default Machine;
