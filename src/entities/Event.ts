import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';

import { v4 as uuid } from "uuid";

@Entity("events")
class Event {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  nf: string;

  @Column()
  value: number;

  @Column()
  ative: boolean;

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

export { Event };