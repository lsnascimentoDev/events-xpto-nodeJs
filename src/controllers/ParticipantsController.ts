import { Request, Response } from "express";
import { ParticipantsService } from "../services/ParticipantsService";

class ParticipantsController {
  async create(request: Request, response: Response) {
    const { name,
      sector,
      sponso,
      value,
      event_id
    } = request.body;

    const participantsService = new ParticipantsService();

    try {
      const participants = await participantsService.create({
        name,
        sector,
        sponso,
        value,
        event_id
      })

      return response.json(participants);
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }

  async showByEvent(request: Request, response: Response) {
    const { id } = request.params;

    const participantsService = new ParticipantsService();

    const list = await participantsService.listByParticipant(id);

    return response.json(list);
  }


  async show(request: Request, response: Response) {

    const participantsService = new ParticipantsService();

    const list = await participantsService.show();

    return response.json(list);
  }

  async update(request: Request, response: Response) {
    //const id = request.params;
    const { name,
      sector,
      sponso,
      value,
      id

    } = request.body;

    const participantsService = new ParticipantsService();

    try {
      const participant = await participantsService.update({
        name,
        sector,
        sponso,
        value,
        id
      })

      return response.json(participant);
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {

    const { id } = request.params;

    const participantsService = new ParticipantsService();

    const participant = await participantsService.delete({ id });

    return response.json(participant);
  }
}

export { ParticipantsController };