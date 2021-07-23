import { Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Event } from '../entities/Event';

@Entity("participants")
class Participant {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  sector: string;

  @Column()
  sponso: boolean;

  @Column()
  value: number;

  @JoinColumn({ name: "event_id" })
  @ManyToOne(() => Event)
  event: Event;

  @Column()
  event_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Participant }