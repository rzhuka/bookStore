import type { Book } from "feature/product/types";
import type { FormValidator } from "feature/form/types";
import { object, string, number } from "yup";

const currentYear = new Date().getFullYear();
export const getFormDefaultValues = () => ({
    title: '',
    description: '',
    author: '',
    subtitle: '',
    publisher: '',
    pages: 1,
    isbn: '',
    year: currentYear
});

export const validator: Record<Exclude<keyof Book, 'isFavorite'>, FormValidator> = {
    title: {
        required: true,
        minLength: 10,
        maxLength: 120,
        pattern: /^[\w@\"#&*! ]{10,120}$/
    },
    description: {
        required: true,
        minLength: 1,
        maxLength: 150,
        pattern: /^[A-Z][\s\S]{0,150}$/

    },
    author: {
        required: false,
        minLength: 2,
        maxLength: 50
    },
    subtitle: {
        required: false,
        minLength: 2,
        maxLength: 50
    },
    publisher: {
        required: false,
        minLength: 5,
        maxLength: 60
    },
    isbn: {
        required: true,
        minLength: 10,
        maxLength: 10,
    },
    pages: {
        required: true,
        max: 9999
    },
    year: {
        required: true,
        max: currentYear,
        pattern: /^\d{2,4}$/,
    }
};

export const useSchema = () => {
    return object()
        .shape({
            title: string()
                .min(validator['title'].minLength!, `Title should be at least ${validator.title.minLength} characters long`)
                .max(validator['title'].maxLength!, `Title should be at maximum ${validator.title.maxLength} characters long`)
                .matches(validator['title'].pattern!, `Title should contain max ${validator.title.maxLength} characters min ${validator.title.minLength}, allow the following special characters: @”#&*!`)
                .required(`This field is required!`),

            description: string()
                .min(validator['description'].minLength!, `Description should be at least ${validator.description.minLength} characters long`)
                .max(validator['description'].maxLength!, `Description should be at maximum ${validator.description.maxLength} characters long`)
                .matches(validator['description'].pattern!, `Description should contain max ${validator.description.maxLength} characters min${validator.description.minLength}, and first letter must be uppercase`)
                .required(`This field is required!`),

            year: number()
                .required(`This field is required!`)
                .max(validator.year.max!, `You can not insert a book that is not published yet!`)
                .integer()
                .typeError(`Please insert a valid year!`),
            isbn: string()
                .required('ISBN is required')
                .test('len', 'Must be exactly 10 digits', (val): boolean => {
                    if (!val) return false;
                    const numericValue = parseInt(val, 10);
                    return !isNaN(numericValue) && numericValue.toString().length === 10;
                }),

            author: string(),
            subtitle: string(),
            publisher: string(),
            pages: number()
        });
};
