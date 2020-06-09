import { BooksController } from "./controllers/booksController.ts";
import { BooksRepository } from "./database/repositories/booksRepository.ts";
import { MandarineCore } from "https://deno.land/x/mandarinets/mod.ts";

const controllers = [BooksController];
const repositories = [BooksRepository];

new MandarineCore().MVC().run();
