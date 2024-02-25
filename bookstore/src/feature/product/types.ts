export type Inventory = {
    readonly books: Array<Book>;
};

export type Book = {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly subtitle: string;
    readonly publisher: string;
    readonly isbn: string;
    readonly pages?: number;
    readonly year?: number;
    isFavorite?: boolean;
};

export type SearchPayload = {
    readonly query: Book['title'];
};

export type SearchFilter = Pick<
    Book,
    | 'title'
    | 'isbn'
    | 'author'
    | 'publisher'
>;
