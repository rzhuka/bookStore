import { useRef, useState } from "react";
import type { Book, Inventory, SearchPayload } from "./types";
import { fetchProduct } from "./api";

export default function useActions() {
    const [books, setBooks] = useState<Array<Book> | null>(null);
    const booksRef = useRef(books);

    const saveBooks = ({ books }: Inventory) => {
        booksRef.current = books;
        setBooks(books);
    };

    const getBooks = () => booksRef.current ?? [];

    const findByTitle = (title: Book['title']) =>
        getBooks().filter(book => book.title.includes(title));

    const add = () => {};

    const search = async ({ title }: SearchPayload) => {
        if (!Array.isArray(booksRef.current)) {
            try {
                const { data } = await fetchProduct();

                saveBooks(data);
            } catch (error) {
                console.error(error);
                // display error
            }
        }

        return findByTitle(title);
    };

    return {
        add,
        search
    };
};
