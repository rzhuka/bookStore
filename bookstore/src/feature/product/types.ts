export type Inventory = {
    readonly books: Array<Book>;
};

export type Book = {
    readonly title: string
};

export type SearchPayload = {
    readonly title: Book['title'];
};
