import { Table, Id, GeneratedValue, Column } from "https://deno.land/x/mandarinets/mod.ts";

export interface IBook {
    id: number;
    name: string;
    author: string;
}

@Table({ schema: "public", name: "books"})
export class BooksModel implements IBook {

    @Column()
    @Id()
    @GeneratedValue({ strategy: "SEQUENCE" })
    public id: number;

    @Column()
    public name: string;

    @Column()
    public author: string;
}