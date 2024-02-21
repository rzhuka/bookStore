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
};

export type SearchPayload = {
    readonly query: Book['title'];
};
