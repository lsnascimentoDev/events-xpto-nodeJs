import { getCustomRepository, Repository } from "typeorm";
import { ParticipantsRepository } from "../repositories/ParticipantsRepository";
import { Participant } from '../entities/Participant';


interface IParticipantsCreate {
  name: string;
  sector: string;
  sponso: boolean;
  value: number;
  event_id: string;

}

interface IParticipantsDelete {
  id: string;
}

interface IParticipantUpdate {
  name: string;
  sector: string;
  sponso: boolean;
  value: number;
  id: string;
}



class ParticipantsService {

  private participantsRepository: Repository<Participant>;

  constructor() {
    this.participantsRepository = getCustomRepository(ParticipantsRepository);
  }

  async create({ name, sector, sponso, value, event_id }: IParticipantsCreate) {


    const participantsAlreadExists = await this.participantsRepository.findOne({
      name,
    });

    if (participantsAlreadExists) {
      throw new Error("Participant already exists!")
    }

    const participants = this.participantsRepository.create({
      name,
      sector,
      sponso,
      value,
      event_id
    });

    await this.participantsRepository.save(participants);

    return (participants);
  }

  async listByParticipant(event_id: string) {
    const list = await this.participantsRepository.find({
      event_id,
    })

    return list;
  }

  async show() {
    const list = await this.participantsRepository.find({})

    return list;
  }

  async update({ name, sector, sponso, value, id }: IParticipantUpdate) {
    const participant = await this.participantsRepository.findOne({ id });

    if (!participant) {
      throw new Error("Participant already exists!")
    };

    participant.name = name;
    participant.sector = sector;
    participant.sponso = sponso;
    participant.value = value;
    participant.event_id = id;

    return this.participantsRepository.save(participant);
  }

  async delete({ id }: IParticipantsDelete) {
    const participantsAlreadExists = await this.participantsRepository.findOne({
      id,
    });

    if (!participantsAlreadExists) {
      throw new Error("Parcicipant not already exists!")
    }

    await this.participantsRepository.remove(participantsAlreadExists);

    return (participantsAlreadExists);
  }

}

export { ParticipantsService };