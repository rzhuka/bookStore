export class AppException<TCause extends unknown> extends Error {
    constructor(
        message: string,
        public name = 'AppException',
        public cause?: TCause
    ) {
        super(message);
    }
}
