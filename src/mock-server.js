import { setupServer } from "msw/node";
import handlers from "./handlers";

//server setup with handlers
export const server = setupServer(...handlers);
