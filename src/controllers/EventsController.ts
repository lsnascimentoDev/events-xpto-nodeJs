import { Request, Response } from "express";
import { EventsService } from "../services/EventsService";


class EventsController {

  async create(request: Request, response: Response) {
    const { name,
      date,
      nf,
      value,
      ative

    } = request.body;

    const eventsService = new EventsService();

    try {
      const events = await eventsService.create({
        name,
        date,
        nf,
        value,
        ative

      })

      return response.json(events);
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {


    const eventsService = new EventsService();

    try {
      const event = await eventsService.show();

      return response.json(event);
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    //const { id } = request.params;
    const { name } = request.body;

    const eventsService = new EventsService();

    try {
      const event = await eventsService.index({
        name,
      })

      return response.json(event);
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const eventsService = new EventsService();

    try {
      const event = await eventsService.delete({
        id,
      })

      return response.json(event);
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    //const id = request.params;
    const { name,
      date,
      nf,
      value,
      ative,
      id

    } = request.body;

    const eventsService = new EventsService();

    try {
      const events = await eventsService.update({
        name,
        date,
        nf,
        value,
        ative,
        id
      })

      return response.json(events);
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }

}

export { EventsController };