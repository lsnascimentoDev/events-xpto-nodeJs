import { getCustomRepository, Repository } from "typeorm";
import { EventsRepository } from "../repositories/EventsRepository";
import { Event } from "../entities/Event";


interface IEventsCreate {
  name: string;
  date: string;
  nf: string;
  value: number;
  ative: boolean

}

interface IEventsFindIndex {
  id: string;
}

interface IEventsFind {
  name: string;
}

interface IEventsUpdate {
  name: string;
  date: Date;
  nf: string;
  value: number;
  ative: boolean,
  id: string;
}


class EventsService {
  private eventsRepository: Repository<Event>;

  constructor() {
    this.eventsRepository = getCustomRepository(EventsRepository);
  }


  async create({ name, date, nf, value, ative }: IEventsCreate) {
    const eventsAlreadExists = await this.eventsRepository.findOne({
      name,
    });

    if (eventsAlreadExists) {
      throw new Error("Events already exists!")
    }

    const events = this.eventsRepository.create({
      name,
      date,
      nf,
      value,
      ative
    });

    await this.eventsRepository.save(events);

    return (events);
  }

  async index({ name }: IEventsFind) {
    //const eventsAlreadExists = await this.eventsRepository.findOne({
    // id,
    //});

    const eventsAlreadExists = await this.eventsRepository.findOne({ where: { name } });

    if (!eventsAlreadExists) {
      throw new Error("Event not already exists!")
    }

    return (eventsAlreadExists);
  }

  async show() {

    const eventsAlreadExists = await this.eventsRepository.find({});

    if (!eventsAlreadExists) {
      throw new Error("Event not exists!")
    }

    return (eventsAlreadExists);
  }

  async delete({ id }: IEventsFindIndex) {
    const eventsAlreadExists = await this.eventsRepository.findOne({
      id,
    });

    if (!eventsAlreadExists) {
      throw new Error("Event not already exists!")
    }

    await this.eventsRepository.remove(eventsAlreadExists);

    return (eventsAlreadExists);
  }

  async update({ name, date, nf, value, ative, id }: IEventsUpdate) {
    const event = await this.eventsRepository.findOne({
      id,
    });

    if (!event) {
      throw new Error("Event already exists!")
    };

    event.name = name;
    event.date = date;
    event.nf = nf;
    event.value = value;
    event.ative = ative


    return this.eventsRepository.save(event);
  }
}

export { EventsService };