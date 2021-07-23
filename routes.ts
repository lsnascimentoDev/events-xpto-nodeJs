import { Router } from 'express';
import { EventsController } from "./src/controllers/EventsController";
import { ParticipantsController } from "./src/controllers/ParticipantsController";

const routes = Router();

const eventsController = new EventsController();
const participantsController = new ParticipantsController();


routes.get("/listEvents", eventsController.show);
routes.get("/events", eventsController.index);
routes.post("/events", eventsController.create);
routes.put("/events", eventsController.update);
routes.delete("/events/:id", eventsController.delete);


routes.get("/listParticipants", participantsController.show);
routes.get("/participants/:id", participantsController.showByEvent);
routes.post("/participants", participantsController.create);
routes.put("/participants", participantsController.update);
routes.delete("/participants/:id", participantsController.delete);

export { routes };