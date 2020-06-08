import { MandarineCore } from "https://deno.land/x/mandarinets/mod.ts";
import { BooksService } from "./services/books-service.ts";
import { BooksController } from "./controllers/books-controller.ts";

const services = [BooksService];
const controllers = [BooksController];

new MandarineCore().MVC().run();