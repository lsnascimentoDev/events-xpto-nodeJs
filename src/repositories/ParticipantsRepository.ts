import { Repository, EntityRepository } from 'typeorm';
import { Participant } from "../entities/Participant"

@EntityRepository(Participant)
class ParticipantsRepository extends Repository<Participant> {

}

export { ParticipantsRepository };