import { Controller, GET, POST, QueryParam } from "https://deno.land/x/mandarinets/mod.ts";
import { BooksService } from "../services/books-service.ts";

@Controller('/api')
export class BooksController {

    constructor(private readonly booksService: BooksService){}

    @POST('/books/add-sample')
    public addSampleBooksHandler() {
        this.booksService.addBook(1, "The Diary Of a Young Girl", "Anne Frank");
        this.booksService.addBook(2, "Sapiens: A Brief History of Humankind", "Yuval Noah Harari");
        return "Success";
    }

    @GET('/books/getAll')
    public getAllBooks() {
        return this.booksService.getAllBooks();
    }

    @GET('/books/get')
    public getBook(@QueryParam('search') typeOfSearch: string, @QueryParam() data: string) {
        if(typeOfSearch === 'id') {
            // We use <any> so the compiler doesn't complain about using a possible string for a number parameter in getBookById
            return this.booksService.getBookById(<any> data);
        } else {
            return this.booksService.getBookByName(data);
        }
    }

}