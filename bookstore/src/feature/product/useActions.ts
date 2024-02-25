import { useEffect, useRef } from "react";
import type { Book, Inventory, SearchFilter } from "./types";
import { fetchProduct } from "./api";
import { CanceledError, type AxiosRequestConfig } from "axios";
import usePersistState from "custom-hooks/usePersistState";
import { compareIds } from "utils/support";

export default function useActions() {
    const [books, setBooks] = usePersistState<Array<Book> | null>({
        persistKey: 'books'
    });

    const booksRef = useRef(books);

    const saveBooks = ({ books }: Inventory) => {
        booksRef.current = books;
        setBooks(() => books);
    };

    const selectBook = (isbn: Book['isbn']) => (
        isbn
            ? getBooks().find(book => book.isbn === isbn)
            : null
    );

    const getBooks = () => booksRef.current ?? [];

    const getFavouriteBooks = () => getBooks().filter(({ isFavorite }) => isFavorite);

    const findByFilter = (serchFilterCriteria: SearchFilter) => {
        const isAnyFilterSelected = () => Object.values(serchFilterCriteria).some(value => value.trim());
        const books = getBooks();

        return isAnyFilterSelected()
            ? books.filter(book => {
                for (const filterType in serchFilterCriteria) {
                    const property = filterType as keyof SearchFilter;
                    const filterValue = serchFilterCriteria[property].trim();

                    if (
                        Object.hasOwn(serchFilterCriteria, filterType) &&
                        book[property]
                            .toLocaleString()
                            .includes(filterValue)
                    ) {
                        return true;
                    }
                }
                return false;
            })
            : books;
    };

    const add = (book: Book) =>
        saveBooks({
            books: [
                ...getBooks(),
                book
            ]
        });

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

    const addToFavourite = ({ isbn }: Book) =>
        saveBooks({
            books: getBooks().map(book =>
                compareIds(book.isbn, isbn)
                    ? ({
                        ...book,
                        isFavorite: true
                    })
                    : book)
        });

    const actions = {
        fetch
    };

    const actionsRef = useRef(actions);
    actionsRef.current = actions;

    useEffect(() => {
        const controller = new AbortController();

        actionsRef.current.fetch({
            signal: controller.signal
        });

        return () => controller.abort();
    }, []);

    return {
        add,
        findByFilter,
        fetch,
        getBooks,
        selectBook,
        addToFavourite,
        getFavouriteBooks
    };
};
