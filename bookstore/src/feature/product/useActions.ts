import { useRef, useState } from "react";
import type { Book, Inventory, SearchPayload } from "./types";
import { fetchProduct } from "./api";
import { CanceledError, type AxiosRequestConfig } from "axios";

export default function useActions() {
    const [books, setBooks] = useState<Array<Book> | null>(null);
    const [selectedBook, setSelectedBook] = useState< Book | null>(null)

    const booksRef = useRef(books);

    const saveBooks = ({ books }: Inventory) => {
        booksRef.current = books;
        setBooks(books);
    };
    const selectBook = (isbn: Book['isbn'] | undefined) => {
        const books = getBooks();
        if (!books.length) {
            fetch()
        }
        return isbn
            ? books.find(book => book.isbn === isbn)
            : null;
    }
    const getBooks = () => booksRef.current ?? [];

    const findByTitle = (title: Book['title']) => {
        const bookTitle = title.trim().toLocaleLowerCase();
        const books = getBooks();

        return bookTitle
            ? books.filter(book =>
                book.title
                    .toLocaleLowerCase()
                    .includes(bookTitle))
            : books;
    };

    const add = () => { };

    const fetch = async (config?: AxiosRequestConfig) => {
        if (booksRef.current?.length) {
            return;
        }

        try {
            const { data } = await fetchProduct(config);

            saveBooks(data);
        } catch (error) {
            if (error instanceof CanceledError) {
                return;
            }

            console.error(error);
            // display error
        }
    };

    return {
        add,
        findByTitle,
        fetch,
        getBooks,
        selectBook,
    };
};
