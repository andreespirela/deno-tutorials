import { Repository, MandarineRepository } from "https://deno.land/x/mandarinets/mod.ts";
import { BooksModel } from "../models/booksModel.ts";

@Repository()
export abstract class BooksRepository extends MandarineRepository<BooksModel> {

    constructor() {
        super(BooksModel);
    }

    public findById(id: number) {}
    public findByAuthor(author: string) {}
    public findByName(name: string) {}
    public findByIdAndName(id: number, name: string) {}
}