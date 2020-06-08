import { Service } from "https://deno.land/x/mandarinets/mod.ts";

const books: Array<IBook> = new Array<IBook>();

interface IBook {
    id: number;
    name: string;
    author: string;
}

@Service()
export class BooksService {

    public addBook(id: number, name: string, author: string) {
        if(!books.some(book => book.name == name || book.id == id)) {
            books.push({
                id: id,
                name: name,
                author: author
            });
        }
    }

    public getBookById(id: number): IBook {
        return books.find(book => book.id = id);
    }

    public getBookByName(name: string): IBook {
        return books.find(book => book.name = name);
    }

    public getAllBooks(): Array<IBook> {
        return books;
    }
}