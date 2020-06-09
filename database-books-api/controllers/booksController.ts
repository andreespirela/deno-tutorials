import { Controller, POST, RequestBody, GET, RouteParam, QueryParam } from "https://deno.land/x/mandarinets/mod.ts";
import { BooksRepository } from "../database/repositories/booksRepository.ts";
import { IBook, BooksModel } from "../database/models/booksModel.ts";

@Controller('/api')
export class BooksController {

    constructor(private readonly booksRepository: BooksRepository){}

    @POST('/add-book')
    public async addBook(@RequestBody() bookToAdd: IBook) {

        let newBook: BooksModel = new BooksModel();
        newBook.author = bookToAdd.author;
        newBook.name = bookToAdd.name;
        await this.booksRepository.save(newBook);

        return { msg: "New book have been added" };
    }

    @GET('/get-book/:id')
    public async getBookById(@RouteParam() id: number) {
        return await this.booksRepository.findById(id);
    }

    @GET('/:author/books')
    public async getBooksByAuthor(@RouteParam() author: string) {
        return await this.booksRepository.findByAuthor(author);
    }

    @GET('/search')
    public async getBooksByIdAndName(@QueryParam() id: number, @QueryParam() name: string) {
        return await this.booksRepository.findByIdAndName(id, name);
    }

    @GET('/all-books')
    public async getAllBooks() {
        return await this.booksRepository.findAll();
    }

}